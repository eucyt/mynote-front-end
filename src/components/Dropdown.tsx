import React from 'react'
import {Menu} from '@headlessui/react'

type Props = {
    align?: 'left' | 'top' | 'right';
    width?: string;
    contentClasses?: string;
    trigger: React.ReactNode;
    children?: React.ReactNode;
}

const Dropdown: React.VFC<Props> = ({
                                        align = 'right',
                                        width = 'w-48',
                                        contentClasses = 'py-1 bg-white',
                                        trigger,
                                        children,
                                    }) => {
    let alignmentClasses: string

    switch (align) {
        case 'left':
            alignmentClasses = 'origin-top-left left-0'
            break
        case 'top':
            alignmentClasses = 'origin-top'
            break
        case 'right':
        default:
            alignmentClasses = 'origin-top-right right-0'
            break
    }

    return (
        <Menu as="div" className="relative">
            <Menu.Button as={React.Fragment}>{trigger}</Menu.Button>
            <div className={`absolute z-50 mt-2 ${width} rounded-md shadow-lg ${alignmentClasses}`}>
                <Menu.Items
                    className={`rounded-md focus:outline-none ring-1 ring-black ring-opacity-5 ${contentClasses}`}>
                    {children}
                </Menu.Items>
            </div>
        </Menu>
    )
}

export default Dropdown
