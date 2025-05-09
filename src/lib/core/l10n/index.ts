import type { MultiLingualDictionary } from '@bull-shark/tdh-lib-mason/i18n'
import {CoreDictionary} from "./core"

export enum Language {
	EN = 'en',
	TH = 'th'
}

export const Dictionary: MultiLingualDictionary<typeof Language> = {
	core: CoreDictionary,
}
