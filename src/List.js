
import React from 'react';
import './List.scss';

const List = (props) => (
    <div>
        <ol class="gradient-list">
            {
                props.data.map(item => {
                    const links = item.wikipedia.map(wiki => (
                        <div><a href={wiki.wikipedia} >{wiki.title}</a> | </div>
                    ));
                    return (
                        <li>
                            {item.description}
                            {links}
                        </li>
                    )
                })
            }
        </ol>
    </div>
);

export default List;
