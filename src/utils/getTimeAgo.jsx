const getTimeAgo = (dateString) => {
    const now = new Date();
    const published = new Date(dateString);
    const seconds = Math.floor((now - published) / 1000);
  
    const intervals = [
      { label: 'year', seconds: 31536000 },
      { label: 'month', seconds: 2592000 },
      { label: 'week', seconds: 604800 },
      { label: 'day', seconds: 86400 },
      { label: 'hour', seconds: 3600 },
      { label: 'minute', seconds: 60 },
    ];
  
    for (let i = 0; i < intervals.length; i++) {
      const interval = Math.floor(seconds / intervals[i].seconds);
      if (interval >= 1) {
        return `${interval} ${intervals[i].label}${interval !== 1 ? 's' : ''} ago`;
      }
    }
  
    return 'Just now';
  };
  
 export default getTimeAgo; 