import React, { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';

import { useSelector } from 'react-redux';
import { IStore } from '../../app/models/store';

import '../../app/layout/style/organisation.scss';

const OrganisationDetail: React.FC = () => {
  const currentUserOrganization = useSelector((store: IStore) => store.currentUser?.data.organisation);
  const organisation = useSelector((store: IStore) => store.currentOrg);

  return (
    <div className='organisation_view'>
      {currentUserOrganization && organisation ? (
        <Fragment>
          <img className='organisation_logo' src={organisation?.imageUrl} alt=''></img>{' '}
          <div className='organisation-content'>
            <h2> {organisation?.companyName}</h2>
            <p>
              <small> Senast uppdaterad: {organisation?.updatedAt}</small>
            </p>
            <div className='organisation_description'>
              <h3>Description</h3>
              <div id='description-text'>
                {organisation?.description && <ReactMarkdown source={organisation?.description} />}
              </div>
              <div></div>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <h2> Details</h2>
          <p> Oops! Something wrong and it's not your fault. Try again later! </p>{' '}
        </Fragment>
      )}
    </div>
  );
};

export default OrganisationDetail;
