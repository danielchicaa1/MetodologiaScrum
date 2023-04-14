
import { Agenda } from "../Agenda/Agenda"
export function Home(){
    return(
        <>
            <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <img src="https://firebasestorage.googleapis.com/v0/b/barberiadfc.appspot.com/o/barberia.jpg?alt=media&token=a1628d09-c5d1-4e4c-96f5-9a9e92d6b6bc" alt="foto" className="img-fluid w-100" />
                    </div>
                    <div className="col12 col-md-4">
                        <Agenda/>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
    
}