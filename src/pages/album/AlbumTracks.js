import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import LinkEntity from '../../components/LinkEntity';
import LinkArtistNames from '../../components/LinkArtistNames';
import HeaderCell from './album-tracks/HeaderCell';

const AlbumTracks = ({ tracks }) => {
  const compare = (a, b) => {
    if (a.track_number < b.track_number) return -1;
    if (a.track_number > b.track_number) return 1;
    return 0;
  };

  return (
    <Table basic="very" unstackable>
      <Table.Header>
        <Table.Row>
          <HeaderCell colSpan="2">Title</HeaderCell>
          <HeaderCell>Artist</HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {tracks.sort(compare).map(item => (
          <Table.Row key={item.track._id}>
            <Table.Cell>{item.track_number}</Table.Cell>
            <Table.Cell>
              <LinkEntity entity={item.track} as="table" strong />
            </Table.Cell>
            <Table.Cell>
              <LinkArtistNames artists={item.track.artists.map(a => a.artist)} as="table" />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

AlbumTracks.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      track_number: PropTypes.number.isRequired,
      track: PropTypes.shape({ artists: PropTypes.array.isRequired }),
    }).isRequired,
  ).isRequired,
};

export default AlbumTracks;
