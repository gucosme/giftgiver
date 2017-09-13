import React from 'react'
import { shallow } from 'enzyme'

import Gift from './Gift'

describe('Gift', () => {
	const gift = shallow(<Gift/>)

	it('renders gift', () => {
		expect(gift).toMatchSnapshot()
	})

	it('initalizes a person and a present in `state`', () => {
		expect(gift.state()).toEqual({ person: '', present: '' })
	})

	describe('when typing in the person input', () => {
		const person = 'Uncle'

		beforeEach(() => {
			gift.find('.input-person').simulate('change', { target: { value: person } })
		})

		it('update the person in `state`', () => {
			expect(gift.state().person).toEqual(person)
		})
	})

	describe('when typing in the present input', () => {
		const present = 'Golf Clubs'

		beforeEach(() => {
			gift.find('.input-present').simulate('change', { target: { value: present } })
		})

		it('update the present in `state`', () => {
			expect(gift.state().present).toEqual(present)
		})
	})
})
