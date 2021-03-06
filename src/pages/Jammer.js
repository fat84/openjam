import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Segment, Grid, GridRow, GridColumn, Container } from 'semantic-ui-react';
import ProfileHeader from './jammer/ProfileHeader';
import ProfileAbout from './jammer/ProfileAbout';
import Spinner from '../components/Spinner';
import { getProfileByHandle } from '../redux/modules/profile';
import Message from '../components/Message';

class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile.profile === null && this.props.profile.loading) {
      this.props.history.push('/not-found');
    }
  }

  render() {
    const { profile, loading } = this.props.profile;
    const { isAuthenticated } = this.props.auth;

    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <Container>
          <React.Fragment>
            <Grid style={{ paddingTop: '0em', marginTop: '-1.5rem' }}>
              <ProfileHeader profile={profile} />

              <GridRow style={{ paddingBottom: '0' }}>
                <GridColumn>{!isAuthenticated && <Message />}</GridColumn>
              </GridRow>

              <ProfileAbout profile={profile} />
            </Grid>
          </React.Fragment>
        </Container>
      );
    }

    return <Segment basic>{profileContent}</Segment>;
  }
}

Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { getProfileByHandle },
)(Profile);
