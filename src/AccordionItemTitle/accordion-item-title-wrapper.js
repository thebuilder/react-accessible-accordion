// @flow

import React from 'react';
import type { ElementProps } from 'react';

import { Subscribe } from 'unstated';
import AccordionContainer from '../AccordionContainer/AccordionContainer';
import ItemContainer from '../ItemContainer/ItemContainer';
import AccordionItemTitle from './accordion-item-title';

const defaultProps = {
    className: 'accordion__title',
    hideBodyClassName: '',
};

type AccordionItemTitleWrapperProps = ElementProps<'div'> & {
    hideBodyClassName: string,
    onClick?: Function,
};

const AccordionItemTitleWrapper = (props: AccordionItemTitleWrapperProps) => {
    return (
        <Subscribe to={[AccordionContainer, ItemContainer]}>
            {(accordionStore, itemStore) => (
                <AccordionItemTitle
                    {...props}
                    uuid={itemStore.state.uuid}
                    accordionStore={accordionStore}
                />
            )}
        </Subscribe>
    );
};
AccordionItemTitleWrapper.defaultProps = defaultProps;

export default AccordionItemTitleWrapper;
