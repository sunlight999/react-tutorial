// JavaScript File
var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Bonjour tout le monde! je suis une boite de commentaires.
      </div>
    );
  }
});
ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);