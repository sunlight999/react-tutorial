// tutorial5.js
var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Pete Hunt">Ceci est un commentaire</Comment>
        <Comment author="Jordan Walke">Voila un autre commentaire</Comment>
      </div>
    );
  }
});