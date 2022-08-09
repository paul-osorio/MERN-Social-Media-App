import moment from "moment";

const useTimeAgo = (time?: any) => {
  var currentTime = moment();
  var timeStore = moment(time);

  const seconds = currentTime.diff(timeStore, "s");
  const minutes = currentTime.diff(timeStore, "m");
  const hours = currentTime.diff(timeStore, "h");

  const days = currentTime.diff(timeStore, "d");
  const weeks = currentTime.diff(timeStore, "w");

  const months = currentTime.diff(timeStore, "M");

  if (days < 1) {
    if (hours < 1) {
      if (minutes < 1) {
        if (seconds < 1) {
          return "Just now";
        }

        return `${seconds}s`;
      }
      return `${minutes}m`;
    }
    return `${hours}h`;
  } else if (days > 1 && days < 2) {
    return "Yesterday";
  } else if (days > 2 && days < 7) {
    return `${days}d`;
  } else if (weeks >= 1 && weeks < 4) {
    return `${weeks}w`;
  } else if (months >= 1 && months < 12) {
    return timeStore.format("MMM DD");
  } else {
    return timeStore.format("MMM DD, YYYY");
  }
};

export default useTimeAgo;
