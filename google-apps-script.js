/**
 * Paste this into your Google Apps Script editor.
 *
 * Setup:
 *  1. Create a Google Sheet. Rename one tab to "likes".
 *     Add headers in row 1: post_id (A1) and likes (B1).
 *  2. In the sheet, open Extensions → Apps Script.
 *  3. Paste this file, save, then:
 *     Deploy → New deployment → Web app
 *       Execute as: Me
 *       Who has access: Anyone
 *     → Deploy → copy the web app URL
 *  4. Paste that URL into LIKES.sheetsUrl in app.js.
 */

function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('likes');
  var params = e.parameter || {};
  if (params.action === 'like' && params.id) {
    return incrementLike(sheet, params.id);
  }
  if (params.action === 'requestAccess') {
    return requestAccess(params);
  }
  return getCounts(sheet);
}

function getCounts(sheet) {
  var rows = sheet.getDataRange().getValues().slice(1);
  var counts = {};
  rows.forEach(function(row) {
    if (row[0]) counts[String(row[0])] = Number(row[1]) || 0;
  });
  return respond(counts);
}

function incrementLike(sheet, postId) {
  var data = sheet.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][0]) === postId) {
      var updated = (Number(data[i][1]) || 0) + 1;
      sheet.getRange(i + 1, 2).setValue(updated);
      return respond({ count: updated });
    }
  }
  sheet.appendRow([postId, 1]);
  return respond({ count: 1 });
}

function requestAccess(params) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('access_requests');
  if (!sheet) {
    sheet = ss.insertSheet('access_requests');
    sheet.appendRow(['timestamp', 'name', 'email', 'offer', 'notes', 'source']);
  } else if (sheet.getLastRow() === 0) {
    sheet.appendRow(['timestamp', 'name', 'email', 'offer', 'notes', 'source']);
  }
  sheet.appendRow([
    new Date().toISOString(),
    params.name || '',
    params.email || '',
    params.offer || 'private access',
    params.notes || '',
    params.source || 'premium-page'
  ]);
  return respond({ ok: true });
}

function respond(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
