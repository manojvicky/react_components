import React from 'react';
import Demo1 from '../../components/demo1/demo1';

export default { title: 'Button' };

export const withManoj = () => <Demo1 str="Manoj"/>;

export const withVicky = () => (
    <Demo1 str="vicky"/>
);