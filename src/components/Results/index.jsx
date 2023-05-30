import style from './Results.module.css'

    const Results = ({userName, resultImc, classificationImc}) => {
        
        return (
            <div className={style.results}>
                {userName + resultImc && (
                    <hr className={style.line} />
                )}
                {userName && (
                    <h2 className={style.result}>Olá {userName}! <br /></h2>
                )}
                {resultImc && (
                    <>
                        <h2 className={style.result}>Seu IMC é de: {resultImc}</h2>
                        <h3 className={style.classification}>Classificação: {classificationImc} </h3>
                        <hr className={style.line} />
                        <span className={style.spanAlert}>IMPORTANTE!</span>
                        <p className={style.alert}>
                            O valor do IMC não distingue a origem do peso (musculo, gordura, etc) assim como sua localização.
                            Ela é uma medida científica para se analisar grandes volumes de dados, porém é uma medida extremamente raza para tomada de decisões clínicas.
                            NÃO utilize esse valor/classificação como auto diagnóstico!
                            Somente um profissional da saúde pode diagnosticar doenças, indicar tratamentos e receitar remédios, cada qual dentro da sua competência.<br />
                            Para saber mais, recomendo a leitura <a href='https://www.cnnbrasil.com.br/saude/imc-o-bom-o-ruim-e-o-errado-na-hora-de-medir-o-indice-de-massa-corporal/' target='_blank'>desta matéria da CNN Brasil</a>.
                        </p> 
                    </>
                )}
                

            </div>
        )
    }

export default Results