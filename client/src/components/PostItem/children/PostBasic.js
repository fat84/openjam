import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LikeButton } from '../../ActionButtons';
import { Segment, SegmentGroup } from 'semantic-ui-react';
import AddComment from './AddComment';
import { SegmentPostBasic } from '../../../elements/UI/SegmentPost';
import Intro from '../elements/Intro';
import { Content } from './styles';
import Comment from './Comment';
import { deletePost, addLike, removeLike } from '../../../redux/modules/post';

class PostBasic extends Component {
  findUserLike = likes => {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user._id).length > 0) {
      return true;
    } else {
      return false;
    }
  };

  renderComments = comments =>
    comments !== undefined &&
    comments !== null &&
    comments.length > 0 &&
    comments.map((comment, idx) => <Comment key={idx} comment={comment} />);

  render() {
    const { post, addLike, removeLike } = this.props;
    const { text, comments, avatar, likes } = post;
    const { user } = this.props.auth;
    const likesCount = likes ? likes.length : 0;
    // const sharesCount = shares ? shares.length : 0;

    return (
      <SegmentPostBasic>
        <Intro post={post} />

        <Content>
          <p>{text}</p>
          <SegmentGroup>
            {comments.length > 0 && <Segment>{this.renderComments(comments)}</Segment>}
            <Segment>
              <AddComment user={user} avatar={avatar} postId={post._id} />
            </Segment>
          </SegmentGroup>

          <LikeButton
            likes={likesCount}
            likeAction={() => addLike(post._id)}
            unlikeAction={() => removeLike(post._id)}
            active={this.findUserLike(post.likes)}
          />
          {/* TODO: implement the share button */}
          {/* <ShareButton shares={sharesCount} /> */}
        </Content>
      </SegmentPostBasic>
    );
  }
}

PostBasic.propTypes = {
  user: PropTypes.object.isRequired,
  post: PropTypes.shape({
    text: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    likes: PropTypes.array,
    shares: PropTypes.array,
    comments: PropTypes.array,
  }).isRequired,
};

PostBasic.defaultProps = {
  comments: [],
  showActions: true,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike },
)(PostBasic);
