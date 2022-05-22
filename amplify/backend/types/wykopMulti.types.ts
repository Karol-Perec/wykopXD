import { WykopLink } from './wykopLink.types'
import { WykopEntry } from './wykopEntry.types'

interface WykopMultiLink {
  type: 'link';
  link: WykopLink;
}

interface WykopMultiEntry {
  type: 'entry';
  entry: WykopEntry;
}

export type WykopMulti = WykopMultiLink | WykopMultiEntry;