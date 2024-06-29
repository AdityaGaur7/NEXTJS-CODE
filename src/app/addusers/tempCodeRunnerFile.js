export default function first() {
    return(
        <div>
            <h1>
                Add user
            </h1>
            <form>
                <input type="text" placeholder="name" name="name" /><br/>
                <input type="number" placeholder="age" name="age" /><br/>
                <input type="email" placeholder="email" name="email" /><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}