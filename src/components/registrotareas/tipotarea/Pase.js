import React from 'react';



const Pase = () => {
    return (
        <>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Codigo Jira</label>
                                    <select className="form-control select2" style={{ width: '100%' }}>
                                        <option selected="selected">4568</option>
                                        <option>2469</option>
                                        <option>1453</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Pase</label>
                                    <select className="form-control select2" style={{ width: '100%' }}>
                                        <option selected="selected">60 Instalado en QA cliente</option>
                                        <option>Pase</option>
                                        <option>Otro</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                
                            <div className="form-group">
                                    <label>Observacion</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                            </div>

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                
                            <div className="form-group">
                                <label>Responsable</label>
                                <select className="form-control select2" style={{ width: '100%' }}>
                                        <option selected="selected">Felix, Galindo Jorge</option>
                                        <option>Pase</option>
                                        <option>Otro</option>
                                </select>
                            </div>

                            </div>
                        </div>
            
        </>

    );
}

export default Pase;
