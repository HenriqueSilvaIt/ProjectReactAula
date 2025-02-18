import './style.css'

export default function SerachBar() {
    return (
        <form className="dsc-search-bar dsc-mt20">
            <button type="submit">🔎︎</button>
            <input type="text" placeholder="Nome do produto" />
            <button type="reset">🗙</button>
        </form>
    );
}