import React, {lazy} from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';

import MainLayout from './../layout/MainLayout';

const DashboardDefault = lazy(() => import('../views/dashboard'));

//Master
const dataPeserta = lazy(() => import('../views/dataPeserta'));
const dataPenguji = lazy(() => import('../views/dataPenguji'));

const TableBasic2 = lazy(() => import('../views/forms/tables/TableBasic2'));
const TableBasic = lazy(() => import('../views/forms/tables/TableBasic'));
const TableDense = lazy(() => import('../views/forms/tables/TableDense'));

// FitnProper
const pendaftaranPenguji = lazy(() => import('../views/pendaftaranPenguji'));
const pendaftaranFitnProper = lazy(() => import('../views/pendaftaranFitnProper'));
const pendaftaranWawancara = lazy(() => import('../views/pendaftaranWawancara'));
const penilaianFitnProper = lazy(() => import('../views/penilaianFitnProper'));
const penilaianWawancara = lazy(() => import('../views/penilaianWawancara'));

const UtilsTypography = lazy(() => import('../views/utilities/typography'));
const UtilsColor = lazy(() => import('../views/utilities/color'));
const UtilsShadow = lazy(() => import('../views/utilities/shadow'));
const UtilsMaterialIcons = lazy(() => import('../views/utilities/icons/MaterialIcons'));
const UtilsTablerIcons = lazy(() => import('../views/utilities/icons/TablerIcons'));

//Report
const rekapNilaiFitnProper = lazy(() => import('../views/rekapNilaiFitnProper'));
const rekapManual = lazy(() => import('../views/rekapManual'));
const cetakNilaiFitnProper = lazy(() => import('../views/cetakNilaiFitnProper'));
const rekapNilaiWawancara = lazy(() => import('../views/rekapNilaiWawancara'));
const cetakNilaiWawancara = lazy(() => import('../views/cetakNilaiWawancara'));

const tambahPeserta = lazy(() => import('../views/tambahPeserta'));

const SamplePage = lazy(() => import('../views/sample-page'));


const MainRoutes = () => {
    const location = useLocation();

    return (
        <Route
            path={[
                '/dashboard',

                '/tables/tbl-basic2',
                '/tables/tbl-basic',
                '/tables/tbl-dense',

                '/dataPeserta',
                '/dataPenguji',

                '/pendaftaranPenguji',
                '/pendaftaranFitnProper',
                '/pendaftaranWawancara',
                '/penilaianFitnProper',
                '/penilaianWawancara',

                '/utils/util-typography',
                '/utils/util-color',
                '/utils/util-shadow',
                '/icons/tabler-icons',
                '/icons/material-icons',

                '/rekapNilaiFitnProper',
                '/rekapManual',
                '/cetakNilaiFitnProper',
                '/rekapNilaiWawancara',
                '/cetakNilaiWawancara',

                '/tambahPeserta',

                '/sample-page',
            ]}
        >
            <MainLayout showBreadcrumb={true}>
                <Switch location={location} key={location.pathname}>
                        <Route path="/dashboard" component={DashboardDefault} />

                        {/*Master*/}
                        <Route path="/dataPeserta" component={dataPeserta}/>
                        <Route path="/dataPenguji" component={dataPenguji}/>
                        
                        <Route path="/tables/tbl-basic2" component={TableBasic2} />
                        <Route path="/tables/tbl-basic" component={TableBasic} />
                        <Route path="/tables/tbl-dense" component={TableDense} />

                        {/*FitnProper*/}
                        <Route path="/pendaftaranPenguji" component={pendaftaranPenguji}/>
                        <Route path="/pendaftaranFitnProper" component={pendaftaranFitnProper}/>
                        <Route path="/pendaftaranWawancara" component={pendaftaranWawancara}/>
                        <Route path="/penilaianFitnProper" component={penilaianFitnProper}/>
                        <Route path="/penilaianWawancara" component={penilaianWawancara}/>

                        <Route path="/utils/util-typography" component={UtilsTypography} />
                        <Route path="/utils/util-color" component={UtilsColor} />
                        <Route path="/utils/util-shadow" component={UtilsShadow} />
                        <Route path="/icons/tabler-icons" component={UtilsTablerIcons} />
                        <Route path="/icons/material-icons" component={UtilsMaterialIcons} />

                        {/*Report*/}
                        <Route path="/rekapNilaiFitnProper" component={rekapNilaiFitnProper}/>
                        <Route path="/rekapManual" component={rekapManual}/>
                        <Route path="/cetakNilaiFitnProper" component={cetakNilaiFitnProper}/>
                        <Route path="/rekapNilaiWawancara" component={rekapNilaiWawancara}/>
                        <Route path="/cetakNilaiWawancara" component={cetakNilaiWawancara}/>

                        <Route path="/tambahPeserta" component={tambahPeserta}/>

                        <Route path="/sample-page" component={SamplePage} />

                </Switch>
            </MainLayout>
        </Route>
    );
};

export default MainRoutes;
