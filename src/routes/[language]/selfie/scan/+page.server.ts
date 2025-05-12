// @ts-nocheck
import type { EntryGenerator } from '../$types'
import { Language } from '$lib/core/l10n'

export const entries: EntryGenerator = () => {
	return Object.values(Language).map((l) => {
		return { language: l }
	})
}
