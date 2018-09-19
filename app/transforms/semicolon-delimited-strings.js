import DS from 'ember-data';
import { delimited } from '../utils/transform-factories';

export default DS.Transform.extend({
  ...delimited({ split: ';' })
});
