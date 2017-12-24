const SendApi = require('./send-api'),
      GraphRequest = require('./graph-api'),
      MessengerProfile = require('./messenger-profile'),
      Person = require('./person'),
      Labels = require('./message-labels'),
      Broadcast = require('./broadcast-api');
function Client (options) {
  this.GraphRequest = new GraphRequest(options);
  this.setPageToken = this.GraphRequest.setPageToken;
  this.getPageToken = this.GraphRequest.getPageToken;
  this.setApiVersion = this.GraphRequest.setApiVersion;
  this.getApiVersion = this.GraphRequest.graphApiVersion;

  this.Message = new SendApi(this.GraphRequest);
  this.MessengerProfile = new MessengerProfile(this.GraphRequest);
  this.Person = new Person(this.GraphRequest);
  this.Labels = new Labels(this.GraphRequest);
  this.Broadcast = new Broadcast(this.GraphRequest);
}

module.exports = Client;