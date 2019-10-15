import React from 'react';
import PropTypes from 'prop-types';

const RepoList = props => (
  <div>
    <h4> Repo List Component </h4>
    Showing {props.repos.length} repos:
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Page</th>
          <th>Repos</th>
        </tr>
      </thead>
      <tbody>
        {props.repos.map((repo) => {
          return (
            <tr key={repo._id}>
              <td>{repo.id}</td>
              <td>{repo.name}</td>
              <td>{repo.description}</td>
              <td><a href={repo.html_url}>{repo.html_url}</a></td>
              <td><a href={repo.repos_url}>{repo.repos_url}</a></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

RepoList.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
  })).isRequired,
};

export default RepoList;
