import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';

import { calculateScore, calculateGrade } from '../../utils';

  const Stats = ({
    totalQuestions,
    correctAnswers,
    name
  }) => {

  const score = calculateScore(totalQuestions, correctAnswers);
  const { grade, remarks } = calculateGrade(score);
  const [browserData, setBrowserData] = useState([]);

  function allStorage() {
    let values = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;
    while ( i-- ) {
      values.push( localStorage.getItem(keys[i]) );
    }
    return values;
  }

  useEffect(() => {
    const sendData = { name, grade, score }
    localStorage.setItem(`${name}`, JSON.stringify(sendData));
    const receiveData = allStorage().map((item) => JSON.parse(item))
    setBrowserData(receiveData);
    console.log(receiveData);
  })

  return (
    <Table celled striped selectable size="large">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Grande</Table.HeaderCell>
          <Table.HeaderCell>Score</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {browserData && browserData.map((item, i) => (
          <Table.Row key={i + 1}>
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.grade}</Table.Cell>
            <Table.Cell>{item.score}%</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

Stats.propTypes = {
  totalQuestions: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default Stats;
