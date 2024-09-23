import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import ProfileStatus from './ProfileStatus'

test('ProfileStatus component test', async () => {
 let profile = render(<ProfileStatus status='Hello Hello' getUpdeteStatus='Yo Yo Yo' />)
 expect(profile)
})