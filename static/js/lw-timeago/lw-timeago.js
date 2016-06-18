var lw_timeago = function() {

  var config = {
    whitelist: "data-timeago", // Set to null to disable whitelisting

    keepDate: true, // If true, appends the original date after the fuzzy one

    suffixAgo: "ago",
    suffixFromNow: "from now",

    seconds: "less than a minute",
    minute: "about a minute",
    minutes: "%d minutes",
    hour: "about an hour",
    hours: "%d hours",
    day: "about a day",
    days: "%d days",
    month: "about a month",
    months: "%d months",
    year: "about a year",
    years: "%d years",
  }

  function inWords(distanceMillis) {
    // Produce a string representing the milliseconds in a human-readable way

    var suffix = distanceMillis < 0 ? config.suffixFromNow : config.suffixAgo;
    var seconds = Math.abs(distanceMillis) / 1000;
    var minutes = seconds / 60;
    var hours = minutes / 60;
    var days = hours / 24;
    var years = days / 365;

    function substitute(string, number) {
      return string.replace(/%d/i, number);
    }

    var words =
      seconds < 45 && substitute(config.seconds, Math.round(seconds)) ||
      seconds < 90 && substitute(config.minute, 1) ||
      minutes < 45 && substitute(config.minutes, Math.round(minutes)) ||
      minutes < 90 && substitute(config.hour, 1) ||
      hours < 24 && substitute(config.hours, Math.round(hours)) ||
      hours < 42 && substitute(config.day, 1) ||
      days < 30 && substitute(config.days, Math.round(days)) ||
      days < 45 && substitute(config.month, 1) ||
      days < 365 && substitute(config.months, Math.round(days / 30)) ||
      years < 1.5 && substitute(config.year, 1) ||
      substitute(config.years, Math.round(years));

    return words + " " + suffix;
  }

  function diff(timestamp) {
    // Get the number of milliseconds distance from the current time
    return Date.now() - timestamp;
  }

  function doReplace(){
    // Go over all <time> elements, grab the datetime attribute, then calculate
    // and display a fuzzy representation of it.

    var times = document.getElementsByTagName("time")
    for (var i = 0; i < times.length; i++){

      if (config.whitelist && !times[i].hasAttribute(config.whitelist))
        break;

      var datetime = times[i].getAttribute("datetime");
      if (!datetime)
        break;

      var parsed = new Date(datetime);
      if (!parsed)
        break;

      var words = inWords(diff(parsed.getTime()));
      var title = times[i].innerHTML;
      if (config.keepDate){
        words += " on " + times[i].innerHTML;
        title = parsed.toLocaleString()
      }

      times[i].title = title;
      times[i].innerHTML = words;
    }
  }

  return doReplace;
}();
