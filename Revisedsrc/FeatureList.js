import React from 'react';
import './FeatureList.css'
import FeatureItem from './FeatureItem.js'

export default class FeatureList extends React.Component {
  render() {
    return (
      <section className="feature_list">
        <ul>
          <FeatureItem
            features = { this.props.features }
            selected = { this.props.selected }
            updateFeature = { this.props.updateFeature }/>
        </ul>
      </section>

    )
  }
}