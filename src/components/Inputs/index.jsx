import style from './Inputs.module.css'

    const Inputs = ({userName, userWeight, userHeight}) => {
        
        return (
            <div className={style.inputs}>
                <h1 className={style.inputTitle}>Calculadora IMC</h1>
                <ul>
                    <li className={style.inputList}>
                        <label className={style.inputLabel}>Nome:</label>
                        <input className={style.inputInput} type='text' onKeyUp={userName}/>
                    </li>
                    <li className={style.inputList}>
                        <label className={style.inputLabel}>Peso:</label>
                        <input className={style.inputInput} type='number' min={0} onChange={userWeight}/> <span className={style.inputSpan}>Kg</span>
                    </li>
                    <li className={style.inputList}>
                        <label className={style.inputLabel}>Altura:</label>
                        <input className={style.inputInput} type='number' min={0} max={3} step={.01} onChange={userHeight} /> <span className={style.inputSpan}>m</span>
                    </li>
                </ul>
            </div>
        )
    }

export default Inputs