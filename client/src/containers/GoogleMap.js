import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import GreenMarker from '../component/GreenMarker';
import RedMarker from '../component/RedMarker';
import HouseMarker from '../component/HouseMarker';
import WorkMarker from '../component/WorkMarker';


export default class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: 41.838890,
            lng: -87.632156
        },
        zoom: 11.35

    };

    render() {
        return (
            <div className="map-div" style={{ height: '400px', width: '65%', marginBottom: '5px', marginTop: '5px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCDpd7u7nkCtrcdhOi-rKzAmRCBplfd87I' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
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
                        averageCustomerRating="4.7774011"
                        valuedRating="5"
                        reimburseAmt="205.0143147"
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
                        averageCustomerRating="4.4011"
                        valuedRating="3.4567"
                        reimburseAmt="208.03147"
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
                        averageCustomerRating="4.7774011"
                        valuedRating="5"
                        reimburseAmt="205.0143147"
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
                        averageCustomerRating="4.7774011"
                        valuedRating="5"
                        reimburseAmt="205.0143147"
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
                        averageCustomerRating="4.7774011"
                        valuedRating="5"
                        reimburseAmt="205.0143147"
                        costSavingsIncentive="0"
                    />
                    <RedMarker
                        lat={41.8023698}
                        lng={-87.5903642}
                        doctor="Rayner Lloris MD"
                        address="1525 E Hyde Park Blvd, Chicago, IL 60615"
                        phone="(773) 643-1600"
                        linkToWeb="https://www.advocatehealth.com/"
                        googlePlusCode="RC26+WP Chicago, Illinois"
                        averageCustomerRating="2.621325993"
                        valuedRating="3.51614849"
                        reimburseAmt="213.9850793"
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
                        reimburseAmt="208.3260523"
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
                        averageCustomerRating="2.995022589"
                        valuedRating="3.568711795"
                        reimburseAmt="249.9379921"
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
                        reimburseAmt="238.0225498"
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
                        reimburseAmt="212.9140932"
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
                        averageCustomerRating="4.394022175"
                        valuedRating="5"
                        reimburseAmt="200.0390529"
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
                        averageCustomerRating="2.725965958"
                        valuedRating="2.789777129"
                        reimburseAmt="231.8944224"
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
                        averageCustomerRating="4.172329571"
                        valuedRating="4.52323635"
                        reimburseAmt="243.1945633"
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
                        averageCustomerRating="2.964071735"
                        valuedRating="3.745139453"
                        reimburseAmt="206.2034679"
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
                        averageCustomerRating="2.723996335"
                        valuedRating="3.204101316"
                        reimburseAmt="145.8512966"
                        costSavingsIncentive="27.0743517"
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
                        averageCustomerRating="3.567"
                        valuedRating="3.745139453"
                        reimburseAmt="131.1110874"
                        costSavingsIncentive="34.67654"
                    />
                    <GreenMarker
                        lat={41.8909108}
                        lng={-87.6423484}
                        doctor="Chicago Express Doctors"
                        address="520 N Kingsbury St, Chicago, IL 60654"
                        phone="(312) 929-4492"
                        linkToWeb="https://chicagoexpressdoctors.com/"
                        googlePlusCode="V9R5+9X Chicago, Illinois"
                        averageCustomerRating="3.95678"
                        valuedRating="4.44456"
                        reimburseAmt="103.57"
                        costSavingsIncentive="10.89075"
                    />
                    <GreenMarker
                        lat={41.8864496}
                        lng={-87.624169}
                        doctor="Dr. William D. Yates, MD"
                        address="213 N Stetson Ave, Chicago, IL 60601"
                        phone="(312) 261-0872"
                        linkToWeb="https://www.dryateshairscience.com/"
                        googlePlusCode="V9PH+H6 Chicago, Illinois"
                        averageCustomerRating="2.97735"
                        valuedRating="3.5453"
                        reimburseAmt="201.2034679"
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
                        averageCustomerRating="3.964071735"
                        valuedRating="4.745139453"
                        reimburseAmt="202.034679"
                        costSavingsIncentive="10.02352"
                    />
                    <GreenMarker
                        lat={41.8813556}
                        lng={-87.6413443}
                        doctor="ImagineMD"
                        address="10 S Riverside Plaza Suite 2225, Chicago, IL 60606"
                        phone="(312) 374-5860"
                        linkToWeb="https://imaginemd.net/"
                        googlePlusCode="V9J6+G8 Chicago, Illinois"
                        averageCustomerRating="2.964071735"
                        valuedRating="3.745139453"
                        reimburseAmt="206.2034679"
                        costSavingsIncentive="15.56433"
                    />
                    <GreenMarker
                        lat={41.8800079}
                        lng={-87.6443881}
                        doctor="Dr. Richard M. Aronwald, MD"
                        address="23139 Network Pl, Chicago, IL 60673"
                        phone="(847) 733-5707"
                        linkToWeb="https://www.northshore.org/"
                        googlePlusCode="QCV6+WQ Chicago, Illinois"
                        averageCustomerRating="2.964071735"
                        valuedRating="3.745139453"
                        reimburseAmt="206.2034679"
                        costSavingsIncentive="23.333343535"
                    />
                    <GreenMarker
                        lat={41.8750841}
                        lng={-87.6437694}
                        doctor="Dr. James V. Siatras, DO"
                        address="500 S Clinton St, Chicago, IL 60607"
                        phone="(708) 747-4000"
                        linkToWeb="https://www.franciscanhealth.org/"
                        googlePlusCode="V9G5+29 Chicago, Illinois"
                        averageCustomerRating="2.964071735"
                        valuedRating="3.745139453"
                        reimburseAmt="206.2034679"
                        costSavingsIncentive="1.4245654"
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
                        reimburseAmt="154.4024889"
                        costSavingsIncentive="22.79875557"
                    />
                    <GreenMarker
                        lat={41.799737}
                        lng={-87.6665875}
                        doctor="Dr. Daneen Woodward"
                        address="5159 S Ashland Ave, Chicago, IL 60609"
                        phone="(773) 434-9216"
                        linkToWeb="https://www.achn.net/"
                        googlePlusCode="Q8XP+X6 Chicago, Illinois"
                        averageCustomerRating="4.308492641"
                        valuedRating="5"
                        reimburseAmt="116.8700415"
                        costSavingsIncentive="41.56497923"
                    />
                    <GreenMarker
                        lat={41.7993638}
                        lng={-87.5903837}
                        doctor="Dr. Veena V. Arun, MD"
                        address="1525 E 53rd St Suite 1002, Chicago, IL 60615"
                        phone="(773) 288-2020"
                        linkToWeb="http://www.veenaarunmd.com/"
                        googlePlusCode="QCX6+PQ Chicago, Illinois"
                        averageCustomerRating="4.543568027"
                        valuedRating="5"
                        reimburseAmt="140.3580495"
                        costSavingsIncentive="29.82097523"
                    />
                    <GreenMarker
                        lat={41.7883168}
                        lng={-87.6067596}
                        doctor="Dr. Lia A. Bernardi, MD"
                        address="5841 S Maryland Ave, Chicago, IL 60637"
                        phone="(312) 695-7269"
                        linkToWeb="https://www.nm.org/"
                        googlePlusCode="Q9QW+85 Chicago, Illinois"
                        averageCustomerRating="2.152338722"
                        valuedRating="2.866848624"
                        reimburseAmt="192.5425292"
                        costSavingsIncentive="3.728735385"
                    />
                    <GreenMarker
                        lat={41.7842969}
                        lng={-87.6473576}
                        doctor="Pimental Henry T MD"
                        address="6032 S Halsted St, Chicago, IL 60621"
                        phone="(773) 651-9200"
                        linkToWeb="https://www.nm.org/"
                        googlePlusCode="Q9M3+JW Chicago, Illinois"
                        averageCustomerRating="3.947188775"
                        valuedRating="4.032352572"
                        reimburseAmt="185.196117"
                        costSavingsIncentive="7.401941498"
                    />
                    <GreenMarker
                        lat={41.7796642}
                        lng={-87.636333}
                        doctor="Dr. Maria Bautista, MD"
                        address="6307 S Stewart Ave #202, Chicago, IL 60621"
                        phone="(773) 487-5224"
                        linkToWeb="https://doctors.advocatehealth.com/p-maria-bautista-chicago-family-medicine-2"
                        googlePlusCode="Q9H7+VX Chicago, Illinois"
                        averageCustomerRating="2.393918735"
                        valuedRating="2.722240531"
                        reimburseAmt="131.5740611"
                        costSavingsIncentive="34.21296945"
                    />
                    <GreenMarker
                        lat={41.7883168}
                        lng={-87.6067596}
                        doctor="Dr. Anand Gopalsami"
                        address="5841 S Maryland Ave, Chicago, IL 60637"
                        phone="(773) 702-9500"
                        linkToWeb="https://medicine.uchicago.edu/"
                        googlePlusCode="Q9QW+85 Chicago, Illinois"
                        averageCustomerRating="3.003580502"
                        valuedRating="3.519409164"
                        reimburseAmt="198.6313344"
                        costSavingsIncentive="0.6843327855"
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
                        reimburseAmt="175.920743"
                        costSavingsIncentive="12.03962849"
                    />
                    <GreenMarker
                        lat={41.8347571}
                        lng={-87.6348467}
                        doctor="Total Care Physicians"
                        address="3259 S Wells St, Chicago, IL 60616"
                        phone="(312) 225-5785"
                        linkToWeb="http://totalcarechicago.com/"
                        googlePlusCode="R9M8+WW Chicago, Illinois"
                        averageCustomerRating="3.661717506"
                        valuedRating="4.152609843"
                        reimburseAmt="181.9394715"
                        costSavingsIncentive="9.030264268"
                    />
                    <GreenMarker
                        lat={41.8466264}
                        lng={-87.6189006}
                        doctor="Dr. King S. Leong, MD Primary Care Internists"
                        address="2535 S King Dr, Chicago, IL 60616"
                        phone="(773) 784-2822"
                        linkToWeb="https://locations.advocatehealth.com/advocate-medical-group-2535-s-martin-luther-king-dr-chicago-il"
                        googlePlusCode="R9WM+P3 Chicago, Illinois"
                        averageCustomerRating="3.761443963"
                        valuedRating="4.363338907"
                        reimburseAmt="168.4281808"
                        costSavingsIncentive="15.78590958"
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
                        reimburseAmt="133.4859626"
                        costSavingsIncentive="33.25701871"
                    />
                    <GreenMarker
                        lat={41.8806378}
                        lng={-87.6271178}
                        doctor="Dr. Arti H. Chawla, MD"
                        address="104 S Michigan Ave, Chicago, IL 60603"
                        phone="(312) 201-1234"
                        linkToWeb="https://www.michiganavenueimmediatecare.org/"
                        googlePlusCode="V9JG+64 Chicago, Illinois"
                        averageCustomerRating="3.551622986"
                        valuedRating="4.078709799"
                        reimburseAmt="180.0331038"
                        costSavingsIncentive="9.983448096"
                    />
                    <GreenMarker
                        lat={41.8810727}
                        lng={-87.6370648}
                        doctor="Rush Primary Care - Loop"
                        address="230 W Monroe St #1925, Chicago, IL 60606"
                        phone="(312) 942-3100"
                        linkToWeb="https://www.rush.edu/locations/rush-primary-care-loop?utm_source=listing&utm_medium=organic&utm_campaign=yext"
                        googlePlusCode="V9J8+C3 Chicago, Illinois"
                        averageCustomerRating="3.700518473"
                        valuedRating="3.749657503"
                        reimburseAmt="145.3052877"
                        costSavingsIncentive="27.34735615"
                    />
                    <GreenMarker
                        lat={41.8847856}
                        lng={-87.6271547}
                        doctor="Dr. Joshua R. Merok, MD"
                        address="Smurfit-Stone Bldg, 180 N Michigan Ave #1720, Chicago, IL 60601"
                        phone="(312) 201-1234"
                        linkToWeb="https://www.michiganavenueimmediatecare.org/"
                        googlePlusCode="V9PG+62 Chicago, Illinois"
                        averageCustomerRating="4.002819508"
                        valuedRating="4.826053276"
                        reimburseAmt="133.4666099"
                        costSavingsIncentive="33.26669507"
                    />
                    <GreenMarker
                        lat={41.8855085}
                        lng={-87.6270832}
                        doctor="Dr. James A. Runke, MD"
                        address="180 N Michigan Ave, Chicago, IL 60603"
                        phone="(312) 201-1234"
                        linkToWeb="https://www.michiganavenueimmediatecare.org/"
                        googlePlusCode="V9PG+62 Chicago, Illinois"
                        averageCustomerRating="3.695758942"
                        valuedRating="4.452834199"
                        reimburseAmt="129.6316945"
                        costSavingsIncentive="35.18415274"
                    />
                    <GreenMarker
                        lat={41.8806378}
                        lng={-87.6271178}
                        doctor="Niby Matthew, MD"
                        address="104 S Michigan Ave #905, Chicago, IL 60603"
                        phone="(312) 201-1234"
                        linkToWeb="https://www.michiganavenueimmediatecare.org/"
                        googlePlusCode="V9JG+32 Chicago, Illinois"
                        averageCustomerRating="3.772128468"
                        valuedRating="3.776478821"
                        reimburseAmt="185.9854356"
                        costSavingsIncentive="7.007282201"
                    />
                    <GreenMarker
                        lat={41.8708168}
                        lng={-87.6284289}
                        doctor="Dr. Aleksandra Orkiszewska"
                        address="850 S Wabash Ave, Chicago, IL 60605"
                        phone="(312) 583-1066"
                        linkToWeb="https://www.thorek.org/"
                        googlePlusCode="V9CF+8G Chicago, Illinois"
                        averageCustomerRating="2.239497371"
                        valuedRating="2.328464783"
                        reimburseAmt="173.95689"
                        costSavingsIncentive="13.021555"
                    />
                    <GreenMarker
                        lat={41.7997345}
                        lng={-87.5907436}
                        doctor="Advocate Med Group-Hyde Park: Ramirez Roberto M MD"
                        address="1515 E 52nd Pl, Chicago, IL 60615"
                        phone="(773) 493-8212"
                        linkToWeb="https://doctors.advocatehealth.com/i-roberto-p-ramirez-orland-park-internal-medicine"
                        googlePlusCode=""
                        averageCustomerRating="4.515474879"
                        valuedRating="3.56"
                        reimburseAmt="109.6362583"
                        costSavingsIncentive="24.18187087"
                    />
                    <GreenMarker
                        lat={41.8023698}
                        lng={-87.5903642}
                        doctor="Advocate Health Center: Rogers Cornelius MD"
                        address="1525 E Hyde Park Blvd, Chicago, IL 60615"
                        phone="(773) 643-1600"
                        linkToWeb="https://www.advocatehealth.com/"
                        googlePlusCode="RC26+WP Chicago, Illinois"
                        averageCustomerRating="3.661475385"
                        valuedRating="4.478906171"
                        reimburseAmt="143.3119603"
                        costSavingsIncentive="28.34401986"
                    />
                    <GreenMarker
                        lat={41.8090487}
                        lng={-87.5962973}
                        doctor="Dr. David T. Wechter, M.D."
                        address="1301 E 47th St building 2, Chicago, IL 60653"
                        phone="(773) 493-8212"
                        linkToWeb="https://www.nm.org/"
                        googlePlusCode="RC54+J9 Chicago, Illinois"
                        averageCustomerRating="4.746450833"
                        valuedRating="5"
                        reimburseAmt="191.0334595"
                        costSavingsIncentive="4.483270241"
                    />
                </GoogleMapReact>
            </div>
        )
    }

}


