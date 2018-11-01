import React from 'react';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const ButtonLogin = ({ t }) => {
  return (
    <Button
      as={Link}
      to="/login"
      size="massive"
      fluid
      style={{ fontFamily: 'Ubuntu' }}
      content={t('pages.landing.sign-in')}
    />
  );
};

export default withNamespaces('common')(ButtonLogin);
