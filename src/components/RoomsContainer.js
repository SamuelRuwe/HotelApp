import React from 'react'
import RoomsFilter from './RoomFilter';
import RoomsList from './RoomsList';

export default function RoomsContainer() {
    return (
        <div>
            Hello from rooms container
            <RoomsFilter />
            <RoomsList />
        </div>
    )
}