export type GetCampingBasedListParams = {
  numOfRows?: number; // 한 페이지 결과 수
  pageNo?: number; // 페이지 번호
  MobileOS: 'IOS' | 'AND' | 'WIN' | 'ETC'; // OS 구분  [IOS (아이폰), AND (안드로이드), WIN (윈도우폰), ETC(기타)] (필수)
  MobileApp: string; // 서비스명 (필수)
  serviceKey: string; // 인증키 (필수)
  _type?: 'json' | 'xml'; // 응답 메시지 형식
};

export type GetCampingBasedListResponse = {
  response: {
    header: BasedListHeader;
    body: BasedListBody;
  };
};

export type BasedListHeader = {
  resultMsg: string;
  resultCode: string;
};

export type BasedListBody = {
  numOfRows: number;
  pageNo: number;
  totalCount: number;
  items: {
    item: CampingSiteItem[];
  };
};

export type CampingSiteItem = {
  wtrplCo: string;
  brazierCl: string;
  sbrsCl: string;
  sbrsEtc: string;
  posblFcltyCl: string;
  posblFcltyEtc: string;
  clturEventAt: string;
  clturEvent: string;
  exprnProgrmAt: string;
  hvofBgnde: string;
  caravAcmpnyAt: string;
  toiletCo: string;
  swrmCo: string;
  hvofEnddle: string;
  featureNm: string;
  induty: string;
  lctCl: string;
  doNm: string;
  sigunguNm: string;
  zipcode: string;
  addr1: string;
  addr2: string;
  mapX: string;
  mapY: string;
  direction: string;
  tel: string;
  homepage: string;
  resveUrl: string;
  resveCl: string;
  manageNmpr: string;
  gnrlSiteCo: string;
  autoSiteCo: string;
  glampSiteCo: string;
  caravSiteCo: string;
  indvdlCaravSiteCo: string;
  sitedStnc: string;
  siteMg1Width: string;
  siteMg2Width: string;
  siteMg3Width: string;
  siteMg1Vrticl: string;
  siteMg2Vrticl: string;
  siteMg3Vrticl: string;
  siteMg1Co: string;
  siteMg2Co: string;
  siteMg3Co: string;
  siteBottomCl1: string;
  siteBottomCl2: string;
  siteBottomCl3: string;
  siteBottomCl4: string;
  siteBottomCl5: string;
  tooltip: string;
  glampInnerFclty: string;
  caravInnerFclty: string;
  prmisnDe: string;
  operPdCl: string;
  operDeCl: string;
  trlerAcmpnyAt: string;
  intro: string;
  allar: string;
  insrncAt: string;
  trsagntNo: string;
  exprnProgrm: string;
  extshrCo: string;
  frprvtWrppCo: string;
  frprvtSandCo: string;
  fireSensorCo: string;
  themaEnvrnCl: string;
  mangeDivNm: string;
  mgcDiv: string;
  manageSttus: string;
  eqpmnLendCl: string;
  animalCmgCl: string;
  tourEraCl: string;
  firstImageUrl: string;
  createdtime: string;
  modifiedtime: string;
  contentId: string;
  facltNm: string;
  lineIntro: string;
  bizrno: string;
  facltDivNm: string;
};
