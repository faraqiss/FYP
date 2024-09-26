require.config({
  paths: {
    "moment": "path/to/moment",
    "moment-hijri": "path/to/moment-hijri"
  }
});
define(["moment-hijri"], function (moment) {
  moment().format('iYYYY/iM/iD');
});
