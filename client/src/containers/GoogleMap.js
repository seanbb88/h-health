import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import GreenMarker from './GreenMarker';
import RedMarker from './RedMarker';
import HouseMarker from '../component/HouseMarker';
import WorkMarker from '../component/WorkMarker';

class GoogleMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mapDivClass: '',
            visible: false
        }


    }

    componentWillReceiveProps(props) {
        const mapClass = props.className
        this.setState({
            mapDivClass: mapClass
        })

    }



    render() {
        return (

            <div className={this.state.mapDivClass} style={{ height: '365px', width: '90%', overflow: 'visible' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCDpd7u7nkCtrcdhOi-rKzAmRCBplfd87I' }}
                    defaultCenter={{ lat: 41.839164, lng: -87.558935 }}
                    defaultZoom={11.10}
                >
                    <HouseMarker
                        lat={41.905627}
                        lng={-87.627449}
                    />
                    <WorkMarker
                        lat={41.7942715}
                        lng={-87.6043198}
                    />
                    <RedMarker
                        lat={41.8936913}
                        lng={-87.6231417}
                        doctor="Ann C. Allie, MD"
                        address="259 E Erie St Ste 2230, Chicago, IL 60611"
                        phone="(312) 926-6000"
                        linkToWeb="https://www.nm.org/doctors/1619162955?utm_source=yext&utm_medium=gmb%20physician&utm_campaign=online%20listings"
                        googlePlusCode="V9VH+HP Chicago, Illinois"
                        averageCustomerRating="4.8"
                        valuedRating="5"
                        reimburseAmt="205.01"
                        costSavingsIncentive="0"
                    />
                    <RedMarker
                        lat={41.8883074}
                        lng={-87.6306605}
                        doctor="Dr. Geoffrey M. Giordano, DO"
                        address="300 N State St, Chicago, IL 60654"
                        phone="(708) 747-4000"
                        linkToWeb="https://www.franciscanhealth.org/"
                        googlePlusCode="V9QC+7G Chicago, Illinois"
                        averageCustomerRating="4.4"
                        valuedRating="3.5"
                        reimburseAmt="208.03"
                        costSavingsIncentive="0"
                    />
                    <RedMarker
                        lat={41.8751183}
                        lng={-87.6302027}
                        doctor="Dr. Jessica L. Sulkowski, DO"
                        address="520 S State St, Chicago, IL 60605"
                        phone="(708) 747-4000"
                        linkToWeb="https://www.franciscanhealth.org/"
                        googlePlusCode="V9GC+2Q Chicago, Illinois"
                        averageCustomerRating="4.8"
                        valuedRating="5"
                        reimburseAmt="205.01"
                        costSavingsIncentive="0"
                    />
                    <RedMarker
                        lat={41.8621088}
                        lng={-87.6234111}
                        doctor="Dr. Ashley M. Caleel, DO"
                        address="1502 S Prairie Ave, Chicago, IL 60605"
                        phone="(708) 747-4000"
                        linkToWeb="https://www.franciscanhealth.org/"
                        googlePlusCode="V9VH+HP Chicago, Illinois"
                        averageCustomerRating="4.8"
                        valuedRating="5"
                        reimburseAmt="209.85"
                        costSavingsIncentive="0"
                    />
                    <RedMarker
                        lat={41.846569}
                        lng={-87.6184146}
                        doctor="Advocate Health Center Sykes: Wilbert Catherine MD"
                        address="2545 S King Dr, Chicago, IL 60616"
                        phone="(312) 842-7117"
                        linkToWeb="https://www.advocatehealth.com/"
                        googlePlusCode="V9VH+HP Chicago, Illinois"
                        averageCustomerRating="4.8"
                        valuedRating="5"
                        reimburseAmt="198.60"
                        costSavingsIncentive="0"
                    />
                    <RedMarker
                        lat={41.8023698}
                        lng={-87.590}
                        doctor="Rayner Lloris MD"
                        address="1525 E Hyde Park Blvd, Chicago, IL 60615"
                        phone="(773) 643-1600"
                        linkToWeb="https://www.advocatehealth.com/"
                        googlePlusCode="RC26+WP Chicago, Illinois"
                        averageCustomerRating="2.6"
                        valuedRating="3.5"
                        reimburseAmt="213.98"
                        costSavingsIncentive="0"
                    />
                    <RedMarker
                        lat={41.8028296}
                        lng={-87.6281832}
                        doctor="Dr. Patricia Y. Benitez, MD"
                        address="5050 S State St, Chicago, IL 60615"
                        phone="(773) 624-2700"
                        linkToWeb="https://www.achn.net/"
                        googlePlusCode="R93F+5H Chicago, Illinois"
                        averageCustomerRating="5"
                        valuedRating="5"
                        reimburseAmt="208.32"
                        costSavingsIncentive="0"
                    />
                    <RedMarker
                        lat={41.7897995}
                        lng={-87.6078096}
                        doctor="Dr. Ernst R. Lengyel, MD"
                        address="5758 S Maryland Ave, Chicago, IL 60637"
                        phone="(773) 702-6118"
                        linkToWeb="https://www.uchicagomedicine.org/"
                        googlePlusCode="Q9RV+2P Chicago, Illinois"
                        averageCustomerRating="3.0"
                        valuedRating="3.6"
                        reimburseAmt="249.94"
                        costSavingsIncentive="0"
                    />
                    <RedMarker
                        lat={41.7811345}
                        lng={-87.6474351}
                        doctor="Mall Medical Center"
                        address="6202 S Halsted St, Chicago, IL 60621"
                        phone="(773) 962-0633"
                        linkToWeb="https://www.nm.org/"
                        googlePlusCode="Q9J3+FW Chicago, Illinois"
                        averageCustomerRating="5"
                        valuedRating="5"
                        reimburseAmt="238.02"
                        costSavingsIncentive="0"
                    />
                    <RedMarker
                        lat={41.7691287}
                        lng={-87.6463366}
                        doctor="Hernandez Rosita S MD"
                        address="6853 S Halsted St, Chicago, IL 60621"
                        phone="(773) 873-7800"
                        linkToWeb="https://www.stbh.org/find-a-doctor/name/rosita-hernandez/"
                        googlePlusCode="Q994+J8 Chicago, Illinois"
                        averageCustomerRating="5"
                        valuedRating="5"
                        reimburseAmt="212.91"
                        costSavingsIncentive="0"
                    />
                    <RedMarker
                        lat={41.8816257}
                        lng={-87.635562}
                        doctor="One Medical"
                        address="181 W Madison St Suite 3825, Chicago, IL 60602"
                        phone="(312) 219-2230"
                        linkToWeb="https://www.onemedical.com/locations/chi/loop-wmadison/"
                        googlePlusCode="V9J8+JM Chicago, Illinois"
                        averageCustomerRating="4.4"
                        valuedRating="5"
                        reimburseAmt="200.04"
                        costSavingsIncentive="0"
                    />
                    <RedMarker
                        lat={41.8556469}
                        lng={-87.6290229}
                        doctor="Dr. Alfreda Hampton"
                        address="1933 S State St, Chicago, IL 60616"
                        phone="(312) 842-9900"
                        linkToWeb="https://www.advocatehealth.com/"
                        googlePlusCode="V94F+77 Chicago, Illinois"
                        averageCustomerRating="2.7"
                        valuedRating="2.8"
                        reimburseAmt="231.89"
                        costSavingsIncentive="0"
                    />
                    <RedMarker
                        lat={41.793827}
                        lng={-87.5870737}
                        doctor="Dr. Naveed Mallick"
                        address="1642 E 56th St, Chicago, IL 60637"
                        phone="(773) 321-0200"
                        linkToWeb="https://doctors.advocatehealth.com/i-naveed-k-mallick-chicago-internal-medicine"
                        googlePlusCode="QCV8+G4 Chicago, Illinois"
                        averageCustomerRating="4.2"
                        valuedRating="4.5"
                        reimburseAmt="243.19"
                        costSavingsIncentive="0"
                    />
                    <RedMarker
                        lat={41.7949206}
                        lng={-87.5902134}
                        doctor="Dr. Carlos Crudup - MD"
                        address="1525 East 55th Street, 312, Chicago, IL 60637"
                        phone="(773) 580-9307"
                        linkToWeb="https://www.advocatehealth.com/"
                        googlePlusCode="QCV6+WQ Chicago, Illinois"
                        averageCustomerRating="2.9"
                        valuedRating="3.7"
                        reimburseAmt="206.20"
                        costSavingsIncentive="0"
                    />
                    <GreenMarker
                        lat={41.8873707}
                        lng={-87.6304408}
                        doctor="Dr. Kittu Garg"
                        address="Rubloff Building, 750 N Lake Shore, Chicago, IL 60611"
                        phone="(312) 503-6400"
                        linkToWeb="https://www.feinberg.northwestern.edu/faculty-profiles/az/profile.html?xid=35420"
                        googlePlusCode="V9WM+F5 Chicago, Illinois"
                        averageCustomerRating="2.7"
                        valuedRating="3.2"
                        reimburseAmt="145.85"
                        costSavingsIncentive="27.07"
                    />
                    <GreenMarker
                        lat={41.8938988}
                        lng={-87.6186761}
                        doctor="Helmy Ashraf MD"
                        address="446 E Ontario St # 150, Chicago, IL 60611"
                        phone="(312) 695-5060"
                        linkToWeb="https://www.nm.org/"
                        googlePlusCode="V9VM+C9 Chicago, Illinois"
                        averageCustomerRating="5"
                        valuedRating="5"
                        reimburseAmt="145.78"
                        costSavingsIncentive="13.45"
                    />
                    <GreenMarker
                        lat={41.8939184}
                        lng={-87.625269}
                        doctor="Amir C. Marouni, MD"
                        address="676 N. Saint Clair, Arkes 2300, Chicago, IL 60611"
                        phone="(312) 926-2000"
                        linkToWeb="https://www.nm.org/"
                        googlePlusCode="QCV6+WQ Chicago, Illinois"
                        averageCustomerRating="3.56"
                        valuedRating="3.7"
                        reimburseAmt="131.11"
                        costSavingsIncentive="34.68"
                    />
                    <GreenMarker
                        lat={41.8909108}
                        lng={-87.6423484}
                        doctor="Chicago Express Doctors"
                        address="520 N Kingsbury St, Chicago, IL 60654"
                        phone="(312) 929-4492"
                        linkToWeb="https://chicagoexpressdoctors.com/"
                        googlePlusCode="V9R5+9X Chicago, Illinois"
                        averageCustomerRating="3.9"
                        valuedRating="4.4"
                        reimburseAmt="103.57"
                        costSavingsIncentive="10.89"
                    />
                    <GreenMarker
                        lat={41.8864496}
                        lng={-87.624169}
                        doctor="Dr. William D. Yates, MD"
                        address="213 N Stetson Ave, Chicago, IL 60601"
                        phone="(312) 261-0872"
                        linkToWeb="https://www.dryateshairscience.com/"
                        googlePlusCode="V9PH+H6 Chicago, Illinois"
                        averageCustomerRating="2.9"
                        valuedRating="3.5"
                        reimburseAmt="201.20"
                        costSavingsIncentive="0"
                    />
                    <GreenMarker
                        lat={41.8830318}
                        lng={-87.627099}
                        doctor="Dr. Adam J. Levy, MD"
                        address="30 N Michigan Ave #1107, Chicago, IL 60602"
                        phone="(312) 236-3642"
                        linkToWeb="https://chicagoent.com/"
                        googlePlusCode="V9MG+52 Chicago, Illinois"
                        averageCustomerRating="4.0"
                        valuedRating="4.7"
                        reimburseAmt="202.03"
                        costSavingsIncentive="10.02"
                    />
                    <GreenMarker
                        lat={41.8813556}
                        lng={-87.6413443}
                        doctor="ImagineMD"
                        address="10 S Riverside Plaza Suite 2225, Chicago, IL 60606"
                        phone="(312) 374-5860"
                        linkToWeb="https://imaginemd.net/"
                        googlePlusCode="V9J6+G8 Chicago, Illinois"
                        averageCustomerRating="2.9"
                        valuedRating="3.7"
                        reimburseAmt="206.20"
                        costSavingsIncentive="15.56"
                    />
                    <GreenMarker
                        lat={41.8800079}
                        lng={-87.6443881}
                        doctor="Dr. Richard M. Aronwald, MD"
                        address="23139 Network Pl, Chicago, IL 60673"
                        phone="(847) 733-5707"
                        linkToWeb="https://www.northshore.org/"
                        googlePlusCode="QCV6+WQ Chicago, Illinois"
                        averageCustomerRating="3.1"
                        valuedRating="3.7"
                        reimburseAmt="206.20"
                        costSavingsIncentive="23.33"
                    />
                    <GreenMarker
                        lat={41.8750841}
                        lng={-87.6437694}
                        doctor="Dr. James V. Siatras, DO"
                        address="500 S Clinton St, Chicago, IL 60607"
                        phone="(708) 747-4000"
                        linkToWeb="https://www.franciscanhealth.org/"
                        googlePlusCode="V9G5+29 Chicago, Illinois"
                        averageCustomerRating="2.7"
                        valuedRating="3.7"
                        reimburseAmt="206.20"
                        costSavingsIncentive="1.42"
                    />
                    <GreenMarker
                        lat={41.8088554}
                        lng={-87.5999698}
                        doctor="Dr. Jonathan K. Nzoma, DO"
                        address="4722 S Woodlawn Ave, Chicago, IL 60615"
                        phone="(708) 747-4000"
                        linkToWeb="https://www.franciscanhealth.org/"
                        googlePlusCode="RC52+GV Chicago, Illinois"
                        averageCustomerRating="5"
                        valuedRating="5"
                        reimburseAmt="154.40"
                        costSavingsIncentive="22.80"
                    />
                    <GreenMarker
                        lat={41.799737}
                        lng={-87.6665875}
                        doctor="Dr. Daneen Woodward"
                        address="5159 S Ashland Ave, Chicago, IL 60609"
                        phone="(773) 434-9216"
                        linkToWeb="https://www.achn.net/"
                        googlePlusCode="Q8XP+X6 Chicago, Illinois"
                        averageCustomerRating="4.3"
                        valuedRating="5"
                        reimburseAmt="116.87"
                        costSavingsIncentive="41.56"
                    />
                    <GreenMarker
                        lat={41.7993638}
                        lng={-87.5903837}
                        doctor="Dr. Veena V. Arun, MD"
                        address="1525 E 53rd St Suite 1002, Chicago, IL 60615"
                        phone="(773) 288-2020"
                        linkToWeb="http://www.veenaarunmd.com/"
                        googlePlusCode="QCX6+PQ Chicago, Illinois"
                        averageCustomerRating="4.5"
                        valuedRating="5"
                        reimburseAmt="140.36"
                        costSavingsIncentive="29.82"
                    />
                    <GreenMarker
                        lat={41.7883168}
                        lng={-87.6067596}
                        doctor="Dr. Lia A. Bernardi, MD"
                        address="5841 S Maryland Ave, Chicago, IL 60637"
                        phone="(312) 695-7269"
                        linkToWeb="https://www.nm.org/"
                        googlePlusCode="Q9QW+85 Chicago, Illinois"
                        averageCustomerRating="2.1"
                        valuedRating="2.8"
                        reimburseAmt="192.54"
                        costSavingsIncentive="3.73"
                    />
                    <GreenMarker
                        lat={41.7842969}
                        lng={-87.6473576}
                        doctor="Pimental Henry T MD"
                        address="6032 S Halsted St, Chicago, IL 60621"
                        phone="(773) 651-9200"
                        linkToWeb="https://www.nm.org/"
                        googlePlusCode="Q9M3+JW Chicago, Illinois"
                        averageCustomerRating="3.9"
                        valuedRating="4.0"
                        reimburseAmt="185.19"
                        costSavingsIncentive="7.40"
                    />
                    <GreenMarker
                        lat={41.7796642}
                        lng={-87.636333}
                        doctor="Dr. Maria Bautista, MD"
                        address="6307 S Stewart Ave #202, Chicago, IL 60621"
                        phone="(773) 487-5224"
                        linkToWeb="https://doctors.advocatehealth.com/p-maria-bautista-chicago-family-medicine-2"
                        googlePlusCode="Q9H7+VX Chicago, Illinois"
                        averageCustomerRating="2.4"
                        valuedRating="2.7"
                        reimburseAmt="131.57"
                        costSavingsIncentive="34.21"
                    />
                    <GreenMarker
                        lat={41.7883168}
                        lng={-87.6067596}
                        doctor="Dr. Anand Gopalsami"
                        address="5841 S Maryland Ave, Chicago, IL 60637"
                        phone="(773) 702-9500"
                        linkToWeb="https://medicine.uchicago.edu/"
                        googlePlusCode="Q9QW+85 Chicago, Illinois"
                        averageCustomerRating="3.0"
                        valuedRating="3.5"
                        reimburseAmt="198.63"
                        costSavingsIncentive="0.68"
                    />
                    <GreenMarker
                        lat={41.8157531}
                        lng={-87.6289137}
                        doctor="Oak Street Health - Bronzeville"
                        address="4318 S State St, Chicago, IL 60609"
                        phone="(773) 285-9304"
                        linkToWeb="https://www.oakstreethealth.com/locations/greater-chicagoland/bronzeville"
                        googlePlusCode="R98F+78 Chicago, Illinois"
                        averageCustomerRating="5"
                        valuedRating="5"
                        reimburseAmt="175.92"
                        costSavingsIncentive="12.03"
                    />
                    <GreenMarker
                        lat={41.8347571}
                        lng={-87.6348467}
                        doctor="Total Care Physicians"
                        address="3259 S Wells St, Chicago, IL 60616"
                        phone="(312) 225-5785"
                        linkToWeb="http://totalcarechicago.com/"
                        googlePlusCode="R9M8+WW Chicago, Illinois"
                        averageCustomerRating="3.7"
                        valuedRating="4.1"
                        reimburseAmt="181.94"
                        costSavingsIncentive="9.03"
                    />
                    <GreenMarker
                        lat={41.8466264}
                        lng={-87.6189006}
                        doctor="Dr. King S. Leong, MD Primary Care Internists"
                        address="2535 S King Dr, Chicago, IL 60616"
                        phone="(773) 784-2822"
                        linkToWeb="https://locations.advocatehealth.com/advocate-medical-group-2535-s-martin-luther-king-dr-chicago-il"
                        googlePlusCode="R9WM+P3 Chicago, Illinois"
                        averageCustomerRating="3.8"
                        valuedRating="4.4"
                        reimburseAmt="168.43"
                        costSavingsIncentive="15.79"
                    />
                    <GreenMarker
                        lat={41.8682369}
                        lng={-87.6342493}
                        doctor="Northwestern Medicine Primary and Specialty Care"
                        address="1135 S Delano Ct Suite A201, Chicago, IL 60605"
                        phone="(312) 926-3627"
                        linkToWeb="https://www.nm.org/locations/primary-care-south-loop-roosevelt-collection?utm_source=yext&utm_medium=gmb%20location&utm_campaign=online%20listings"
                        googlePlusCode="V999+75 Chicago, Illinois"
                        averageCustomerRating="5"
                        valuedRating="5"
                        reimburseAmt="133.48"
                        costSavingsIncentive="33.26"
                    />
                    <GreenMarker
                        lat={41.8806378}
                        lng={-87.6271178}
                        doctor="Dr. Arti H. Chawla, MD"
                        address="104 S Michigan Ave, Chicago, IL 60603"
                        phone="(312) 201-1234"
                        linkToWeb="https://www.michiganavenueimmediatecare.org/"
                        googlePlusCode="V9JG+64 Chicago, Illinois"
                        averageCustomerRating="3.6"
                        valuedRating="4.1"
                        reimburseAmt="180.03"
                        costSavingsIncentive="9.98"
                    />
                    <GreenMarker
                        lat={41.8810727}
                        lng={-87.6370648}
                        doctor="Rush Primary Care - Loop"
                        address="230 W Monroe St #1925, Chicago, IL 60606"
                        phone="(312) 942-3100"
                        linkToWeb="https://www.rush.edu/locations/rush-primary-care-loop?utm_source=listing&utm_medium=organic&utm_campaign=yext"
                        googlePlusCode="V9J8+C3 Chicago, Illinois"
                        averageCustomerRating="3.7"
                        valuedRating="3.7"
                        reimburseAmt="145.30"
                        costSavingsIncentive="27.35"
                    />
                    <GreenMarker
                        lat={41.8847856}
                        lng={-87.6271547}
                        doctor="Dr. Joshua R. Merok, MD"
                        address="Smurfit-Stone Bldg, 180 N Michigan Ave #1720, Chicago, IL 60601"
                        phone="(312) 201-1234"
                        linkToWeb="https://www.michiganavenueimmediatecare.org/"
                        googlePlusCode="V9PG+62 Chicago, Illinois"
                        averageCustomerRating="4.0"
                        valuedRating="4.8"
                        reimburseAmt="133.47"
                        costSavingsIncentive="33.26"
                    />
                    <GreenMarker
                        lat={41.8855085}
                        lng={-87.6270832}
                        doctor="Dr. James A. Runke, MD"
                        address="180 N Michigan Ave, Chicago, IL 60603"
                        phone="(312) 201-1234"
                        linkToWeb="https://www.michiganavenueimmediatecare.org/"
                        googlePlusCode="V9PG+62 Chicago, Illinois"
                        averageCustomerRating="3.7"
                        valuedRating="4.4"
                        reimburseAmt="129.63"
                        costSavingsIncentive="35.18"
                    />
                    <GreenMarker
                        lat={41.8806378}
                        lng={-87.6271178}
                        doctor="Niby Matthew, MD"
                        address="104 S Michigan Ave #905, Chicago, IL 60603"
                        phone="(312) 201-1234"
                        linkToWeb="https://www.michiganavenueimmediatecare.org/"
                        googlePlusCode="V9JG+32 Chicago, Illinois"
                        averageCustomerRating="3.8"
                        valuedRating="3.8"
                        reimburseAmt="185.98"
                        costSavingsIncentive="7.01"
                    />
                    <GreenMarker
                        lat={41.8708168}
                        lng={-87.6284289}
                        doctor="Dr. Aleksandra Orkiszewska"
                        address="850 S Wabash Ave, Chicago, IL 60605"
                        phone="(312) 583-1066"
                        linkToWeb="https://www.thorek.org/"
                        googlePlusCode="V9CF+8G Chicago, Illinois"
                        averageCustomerRating="2.2"
                        valuedRating="2.3"
                        reimburseAmt="173.95"
                        costSavingsIncentive="13.02"
                    />
                    <GreenMarker
                        lat={41.7997345}
                        lng={-87.5907436}
                        doctor="Advocate Med Group-Hyde Park: Ramirez Roberto M MD"
                        address="1515 E 52nd Pl, Chicago, IL 60615"
                        phone="(773) 493-8212"
                        linkToWeb="https://doctors.advocatehealth.com/i-roberto-p-ramirez-orland-park-internal-medicine"
                        googlePlusCode=""
                        averageCustomerRating="4.5"
                        valuedRating="3.6"
                        reimburseAmt="109.63"
                        costSavingsIncentive="24.18"
                    />
                    <GreenMarker
                        lat={41.8023698}
                        lng={-87.5903642}
                        doctor="Advocate Health Center: Rogers Cornelius MD"
                        address="1525 E Hyde Park Blvd, Chicago, IL 60615"
                        phone="(773) 643-1600"
                        linkToWeb="https://www.advocatehealth.com/"
                        googlePlusCode="RC26+WP Chicago, Illinois"
                        averageCustomerRating="3.6"
                        valuedRating="4.4"
                        reimburseAmt="143.31"
                        costSavingsIncentive="28.34"
                    />
                    <GreenMarker
                        lat={41.8090487}
                        lng={-87.5962973}
                        doctor="Dr. David T. Wechter, M.D."
                        address="1301 E 47th St building 2, Chicago, IL 60653"
                        phone="(773) 493-8212"
                        linkToWeb="https://www.nm.org/"
                        googlePlusCode="RC54+J9 Chicago, Illinois"
                        averageCustomerRating="3.8"
                        valuedRating="4.2"
                        reimburseAmt="134.31"
                        costSavingsIncentive="14.39"
                    />
                </GoogleMapReact>
            </div>
        )

    }

}

export default GoogleMap; 