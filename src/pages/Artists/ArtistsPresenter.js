import React from 'react';
import PropTypes from 'prop-types';
import ArtistItem from './artists-presenter/ArtistItem';
import Body from '../../components/Body';
import Flex from '../../components/Flex';
import H2 from '../../components/H2';

const ArtistsPresenter = ({ artists }) => (
  <Body breadcrumbSegments={['Artists']} description="Pick some music by artist.">
    <H2 header="What's new" />
    <Flex wrap justifyStart>
      {artists.map(artist => (
        <ArtistItem key={artist._id} artist={artist} />
      ))}
    </Flex>
  </Body>
);

ArtistsPresenter.propTypes = {
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ArtistsPresenter;
