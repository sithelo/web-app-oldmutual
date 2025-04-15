import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from './../src/app/page'
import '@testing-library/jest-dom/extend-expect'
import {describe, it} from "node:test";
import {expect} from '@jest/globals';



describe('Page', () => {
    it('renders a heading', () => {
        render(<Page />)

        const heading = screen.getByRole('heading', { level: 1 })

        expect(heading).toBeInTheDocument()
    })
})