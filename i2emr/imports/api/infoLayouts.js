import React, { Component, Fragment } from 'react';

import { geriPtConsult } from './infoLayouts/geriPtConsult';
import { geriOtConsult } from './infoLayouts/geriOtConsult';
import { doctorSConsult } from './infoLayouts/doctorSConsult';
import { geriCognitiveFollowUp } from './infoLayouts/geriCognitiveFollowUp';
import { socialService } from './infoLayouts/socialService';
import { dietitian } from './infoLayouts/dietitian';
import { historyTaking } from './infoLayouts/historyTaking';
import { oralScreening } from './infoLayouts/oralScreening';

// Define the layouts
export const infoLayouts = {
  "Geri - PT Consult" : (info) => {
      return geriPtConsult(info)
  },

  "Geri - OT Consult" : (info) => {
    return geriOtConsult(info)
  },

  "Doctor's Consult" : (info) => {
    return doctorSConsult(info);
  },

  "Geri - Cognitive Follow Up" : (info) => {
    return geriCognitiveFollowUp(info);
  },

  "Social Service" : (info) => {
    return socialService(info);
  },

  "Dietitian" : (info) => {
    return dietitian(info);
  },

  "History Taking - Phlebo" : (info) => {
    return historyTaking(info);
  },

  "History Taking - Non Phleb" : (info) => {
    return historyTaking(info);
  },

  "Oral Screening" : (info) => {
    return oralScreening(info);
  },

};