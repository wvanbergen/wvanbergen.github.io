
String.prototype.escapeHTML = function () {
  return(this.replace(/&/g,'&amp;').replace(/>/g,'&gt;').replace(/</g,'&lt;').replace(/"/g,'&quot;'));                                                 
};

function jsonFlickrFeed(feed) {

  var ul_element = $('#photostream ul');
  
  for (var index in feed.items) {
    var item = feed.items[index];
    ul_element.append('<li><a href="' + item.link.escapeHTML() + '" title="' + item.title.escapeHTML() + '" alt="' + item.title.escapeHTML() + '"><img src="' + 
          flickrUrl(item.media.m, 's') + '" alt="' + item.title.escapeHTML() + '" width="75" height= "75" /></a></li>');
  }
}

function flickrUrl(base_url, size) {
  new_url = base_url.replace(/_m\.jpg$/, '_' + size + '.jpg')
  return new_url;
}