import React from 'react';
import FeatureList from './FeatureList';
import './MainForm.css';

export default class MainForm extends React.Component {
  render(){
    return (
      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
          <FeatureList
            features = { this.props.features }
            selected = { this.props.selected }
            updateFeature = { this.props.handleUpdate }/>
      </section>
    )
  }
} 