// tutorial3.js
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Commentaires</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});