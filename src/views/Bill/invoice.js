import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
// import './invoice.css'
import ViewBill from './ViewBill'
const Invoice = ({resu}) => {
  // console.log("bbbbbbbbb",resu)
  const [data1, setData1] = useState([{}])
  useEffect(() => {
    getProductBill()
  }, [])

  async function getProductBill() {
    let res = await fetch('https://inventorymanagmentbe.herokuapp.com/getBill', {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    // setBill(data.bill.length)
    setData1(data)

}
console.log(data1)
  return (
    <div>
    
      <button  onClick={() => window.print()} id="myPrntbtn" class="btn-pri">
        Print Invoice
      </button>

      <br/> 
      <br/> 

      <div class="container-fluid" style={{marginTop:'5px'}}>
        <div class="conatainer">
          <div class="row">
            <div class="col-md-12">
              <div style={{border:'1px solid'}}>
                <img  />
              </div>
              <table class="address-tbl">
                <tr>
                  <td class="td-third">
                    <span>INFOLANE TECHNOLOGIES PRIVATE LIMITED</span>
                    <p>
                      D- 101,2nd Floor<br/>
                      Sector-63, Noida<br/>
                      Gautambudh Nagar 201301 (UP)
                    </p>

                    <p>e-mail id : shakti@infolanetechnologies.com</p>
                  </td>

                  <td class="td-first">
                    <span></span>
                  </td>

                  <td class="td-third">
                    <p>Bill Id. : </p>
                    <p>Date : </p>
                    <br/>
                    <p>GST No. : </p>
                    <p>PAN. : </p>
                  </td>

                  <td class="td-third">
                    
                    <th>{resu?._id}</th>
                    <br/>
                    <p>07AAXCS0881M2ZG </p>
                    <p> 0AAXCS0881M</p>
                  </td>
                </tr>
              </table>

              <div style={{border:'1px solid'}}>
                <p class="tax">TAX INVOICE</p>
                <span style={{paddingLeft:'10px'}}>To</span>

                <ul class="ul-list">
                  <th>{resu?.billing_to} </th>
                  <li  > </li>
                  <li style={{marginTop:'7px'}}>
                    GST No. <span> GYPQ2119N </span>
                  </li>
                </ul>
              </div>

              <table>
                <tr>
                  <td class="td-desc">
                    <span>Description</span>
                  </td>

                  <td class="td-first">
                    <p style={{textAlign:'center'}}>
                      HSN/SAC<br/>CODE 
                    </p>{' '}
                  </td>

                  <td class="td-fourth">
                    <p style={{textAlign:'center'}}>Amount(Rs.)</p>
                    <table style={{width:'100%'}}>
                      <tr>
                        <td>
                          <p style={{textAlign:'center'}}>Non Taxable</p>
                        </td>
                        <td>
                          <p style={{textAlign:'center'}}>Taxable</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td class="td-padmost">
                    <p class="desc"> </p>
                  </td>

                  <td class="td-first">
                    <p class="desc" style={{textAlign:'center'}}>
                      998314
                    </p>{' '}
                  </td>

                  <td>
                    <table class="mar-tab">
                      <tr style={{height:'61px'}}>
                        <td>
                          <p style={{textAlign:'center', width: '78px'}}></p>
                        </td>
                        <td>
                          <p style={{float:'right'}}></p>
                        </td>
                      </tr>
                      <tr class="td-wid">
                        <td></td>
                        <td></td>
                      </tr>

                      <tr>
                        <td>
                          <span style={{float:'right'}}>Total</span>
                        </td>
                        <td>
                          <span style={{float:'right'}}> </span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <ul class="ul-lista">
                            <li class="margin-top: -10px;">CGST</li>
                            <li style={{marginTop:'7px'}}>SGST</li>
                            <li style={{marginTop:'7px'}}>IGST</li>
                          </ul>
                        </td>

                        <td>
                          <span style={{float:'right'}}>
                            <ul class="ul-list">
                              <li style={{marginTop: '9px'}}></li>

                              <li style={{marginTop:'7px'}}></li>

                              <li style={{marginTop:'7px'}}></li>
                            </ul>
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <span style={{float:'right'}}>Grand Total</span>
                        </td>
                        <td>
                          <span style={{float:'right'}}></span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td class="td-third" colspan="4">
                    <p style={{marginBottom: '10px'}}>In Words :</p>
                    <span></span>
                  </td>
                </tr>

                <tr>
                  <td class="td-last" colspan="4"></td>
                </tr>
              </table>

              <table>
                <tr>
                  <td class="td-last">
                    <span>
                      1 : Make all the payment through cheque payable to<br/> "INFOLANE
                      TECHNOLOGIES Details for NEFT/RTGS<br/> INFOLANE TECHNOLOGIES PRIVATE
                      LIMITED<br/> ICICI Bank A/c No. 628405021693<br/>
                      Branch : SEC-50,Noida,Uttarpradesh-201301<br/>
                      IFSC: ICIC0006284
                    </span>
                    <br/>
                    <span>
                      2 : if you have any question please call or email us :
                      shakti@infolanetechlogies.com
                    </span>
                  </td>

                  <td>
                    <p class="forin">for INFOLANE TECHNOLOGIES PVT LTD</p>
                    <hr style={{marginTop: '-15px', color:'black!important', borderBottom:'1px solid #000'}} />
                  </td>
                </tr>

                <tr>
                  <td></td>
                  <td class="sign">Authorised Signatory</td>
                </tr>
              </table>

              <button onClick={() => window.print()}  id="myPrntbtn" class="btn-pri1">Print Invoice</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Invoice
