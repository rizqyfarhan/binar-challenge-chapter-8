import "./Table.css";
import { useState } from "react";

const Table = (props) => {

    const [search, setSearchTerm] = useState('');

    const searchedData = props.players.filter((player) => {
        return player.username.toLowerCase().includes(search.toLowerCase()) ||
            player.email.toLowerCase().includes(search.toLowerCase()) ||
            player.experience.toLowerCase().includes(search.toLowerCase()) ||
            player.level.toLowerCase().includes(search.toLowerCase())
    });

    return (
        <table className="table">
            <thead>
                <tr>
                    <td>NO</td>
                    <td>Username</td>
                    <td>Email</td>
                    <td>Experience</td>
                    <td>Level</td>
                    <td>Action</td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type='text' placeholder='search' onChange={(event) => {
                            setSearchTerm(event.target.value)
                        }}></input>
                    </td>
                    <td>
                        <input type='text' placeholder='search' onChange={(event) => {
                            setSearchTerm(event.target.value)
                        }}></input>
                    </td>
                    <td>
                        <input type='text' placeholder='search' onChange={(event) => {
                            setSearchTerm(event.target.value)
                        }}></input>
                    </td>
                    <td>
                        <input type='text' placeholder='search' onChange={(event) => {
                            setSearchTerm(event.target.value)
                        }}></input>
                    </td>
                </tr>
            </thead>
            <tbody>
                {searchedData.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.experience}</td>
                            <td>{item.level}</td>
                            <td>
                                <button onClick={() => props.onEditPlayer(item)} className='form__actions__edit'>Edit</button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}

export default Table;