import {EntityDataModuleConfig, EntityMetadataMap} from '@ngrx/data';

export const pluralName = {
  // Case matters. Match the case of the entity name.
  Hero: 'Heroes'
};

export function nameFilter(entities: { name: string }[], search: string) {
  return entities.filter(e => -1 < e.name.indexOf(search));
}

export function sortByName(a: { name: string }, b: { name: string }): number {
  return a.name.localeCompare(b.name);
}

export const appEntityMetadata: EntityMetadataMap = {
  Hero: {
    filterFn: nameFilter,
    sortComparer: sortByName
  }
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata: appEntityMetadata,
  pluralNames: pluralName
};
