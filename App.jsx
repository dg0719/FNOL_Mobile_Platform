import { useState, useEffect } from "react";

const I = {
  Shield: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  Car: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2"/><circle cx="6.5" cy="16.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/></svg>,
  Home: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>,
  Upload: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17,8 12,3 7,8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>,
  Camera: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>,
  Check: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20,6 9,17 4,12"/></svg>,
  Clock: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>,
  FileText: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  Msg: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>,
  Alert: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  MapPin: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Phone: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.74.32 1.46.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1.35.38 2.07.58 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  Right: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9,18 15,12 9,6"/></svg>,
  Left: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15,18 9,12 15,6"/></svg>,
  Plus: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  Bell: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
  Drop: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>,
  Flame: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>,
  Wind: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>,
  Box: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>,
  Search: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  X: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  DL: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
};

// ── DATA ──
const policies = [
  { id:"POL-2024-00892", type:"Auto", name:"2023 Toyota RAV4 — Personal Auto", premium:"$1,840/yr", deductible:"$500", coverage:"Comprehensive + Collision", renewal:"Sep 15, 2026", asset:"2023 Toyota RAV4 XLE", claims:1 },
  { id:"POL-2023-04510", type:"Home", name:"42 Lakeshore Rd — Homeowners", premium:"$3,250/yr", deductible:"$1,000", coverage:"Dwelling + Property + Liability", renewal:"Jan 1, 2027", asset:"42 Lakeshore Rd, Oakville", claims:1 },
  { id:"POL-2025-01278", type:"Auto", name:"2025 Honda CR-V — Personal Auto", premium:"$2,110/yr", deductible:"$500", coverage:"Comprehensive + Collision + Rental", renewal:"Mar 1, 2027", asset:"2025 Honda CR-V EX-L", claims:0 },
  { id:"POL-2024-06833", type:"Home", name:"Unit 1204, 88 Queen St — Tenant", premium:"$420/yr", deductible:"$500", coverage:"Personal Property + Liability", renewal:"Jun 1, 2026", asset:"88 Queen St E, Toronto", claims:0 },
];

const claims = [
  { id:"CLM-2026-04187", type:"Auto Collision", date:"Apr 8, 2026", status:"Under Review", sc:"#E8A317", adjuster:"Sarah Mitchell", desc:"Rear-end collision at intersection of Yonge & Dundas", payout:"$4,200", next:"Adjuster inspection scheduled for Apr 15", docs:3, msgs:2, progress:40 },
  { id:"CLM-2026-03952", type:"Property — Water Damage", date:"Mar 22, 2026", status:"Approved", sc:"#22A06B", adjuster:"James Thornton", desc:"Burst pipe in basement causing flooding", payout:"$11,850", next:"Payment processing — ETA 3 business days", docs:7, msgs:5, progress:85 },
  { id:"CLM-2025-11403", type:"Property — Storm", date:"Nov 12, 2025", status:"Settled", sc:"#388BFF", adjuster:"Priya Sharma", desc:"Wind damage to roof shingles and siding", payout:"$8,600", next:"Claim closed — payment issued Nov 28", docs:9, msgs:8, progress:100 },
];

const msgs = [
  { id:1, from:"Sarah Mitchell", role:"Adjuster", time:"Apr 10, 2:34 PM", text:"Hi, I've reviewed your initial submission. Could you upload a close-up photo of the rear bumper damage?", unread:true },
  { id:2, from:"You", role:"", time:"Apr 10, 3:12 PM", text:"Sure, I'll take those photos this afternoon and upload them.", unread:false },
  { id:3, from:"Sarah Mitchell", role:"Adjuster", time:"Apr 11, 9:05 AM", text:"Thank you! I've scheduled an in-person inspection for April 15 at 10 AM at the address on file.", unread:true },
];

// ── STYLES ──
const S = {
  app:{ minHeight:"100vh", background:"#0D1117", fontFamily:"'DM Sans',sans-serif", color:"#E2E8F0" },
  hdr:{ position:"sticky", top:0, zIndex:100, background:"rgba(13,17,23,0.85)", backdropFilter:"blur(20px)", borderBottom:"1px solid #1E2533" },
  hdrIn:{ maxWidth:1280, margin:"0 auto", padding:"0 24px", height:64, display:"flex", alignItems:"center", justifyContent:"space-between" },
  logo:{ display:"flex", alignItems:"center", gap:10, cursor:"pointer" },
  logoMk:{ width:36, height:36, borderRadius:10, background:"linear-gradient(135deg,#388BFF,#22A06B)", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff" },
  logoTxt:{ fontSize:17, fontWeight:700, color:"#F7FAFC" },
  logoSub:{ fontSize:10, color:"#718096", letterSpacing:"0.06em", textTransform:"uppercase", fontWeight:500 },
  nav:{ display:"flex", gap:4 },
  navL:{ padding:"8px 14px", background:"none", border:"none", color:"#A0AEC0", fontSize:14, fontWeight:500, borderRadius:8, display:"flex", alignItems:"center", gap:6 },
  navA:{ color:"#F7FAFC", background:"#1E2533" },
  badge:{ background:"#E34935", color:"#fff", fontSize:10, fontWeight:700, padding:"2px 6px", borderRadius:10 },
  hdrR:{ display:"flex", alignItems:"center", gap:12 },
  emBtn:{ display:"flex", alignItems:"center", gap:6, padding:"7px 14px", background:"#E3493515", border:"1px solid #E3493540", color:"#E34935", borderRadius:8, fontSize:13, fontWeight:600 },
  icnBtn:{ width:36, height:36, borderRadius:8, border:"1px solid #2D3748", background:"transparent", color:"#A0AEC0", display:"flex", alignItems:"center", justifyContent:"center", position:"relative" },
  icnSm:{ width:28, height:28, borderRadius:6, border:"none", background:"transparent", color:"#A0AEC0", display:"flex", alignItems:"center", justifyContent:"center" },
  dot:{ position:"absolute", top:6, right:6, width:8, height:8, borderRadius:"50%", background:"#E34935" },
  avatar:{ width:36, height:36, borderRadius:"50%", background:"linear-gradient(135deg,#388BFF,#22A06B)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:13, fontWeight:700, color:"#fff" },
  main:{ maxWidth:1280, margin:"0 auto", padding:"32px 24px 64px" },
  cnt:{ animation:"fadeUp 0.4s ease" },
  // hero
  hero:{ background:"linear-gradient(135deg,#0F2027,#14243B 50%,#0B3D2E)", borderRadius:20, padding:"40px 40px", display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:28, border:"1px solid #1E2533", overflow:"hidden" },
  heroC:{ maxWidth:520, zIndex:1 },
  heroT:{ fontSize:28, fontWeight:700, color:"#F7FAFC", marginBottom:10, lineHeight:1.2 },
  heroS:{ fontSize:14, color:"#A0AEC0", lineHeight:1.6, marginBottom:20 },
  heroCTA:{ display:"inline-flex", alignItems:"center", gap:8, padding:"12px 24px", background:"linear-gradient(135deg,#388BFF,#22A06B)", border:"none", borderRadius:12, color:"#fff", fontSize:15, fontWeight:600, boxShadow:"0 4px 20px rgba(56,139,255,0.3)" },
  heroGfx:{ width:100, height:100, borderRadius:30, background:"rgba(56,139,255,0.08)", border:"1px solid rgba(56,139,255,0.15)", display:"flex", alignItems:"center", justifyContent:"center", color:"#388BFF", transform:"scale(1.8)", opacity:0.3 },
  // stats
  stats:{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:14, marginBottom:28 },
  statC:{ background:"#161B22", borderRadius:14, padding:"18px 18px", border:"1px solid #1E2533", position:"relative", overflow:"hidden" },
  statAc:{ position:"absolute", top:0, left:0, right:0, height:3 },
  statV:{ fontSize:26, fontWeight:700, color:"#F7FAFC", fontFamily:"'JetBrains Mono',monospace" },
  statL:{ fontSize:12, color:"#718096", fontWeight:500, marginTop:2 },
  // section
  secH:{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 },
  secT:{ fontSize:18, fontWeight:600, color:"#F7FAFC" },
  txtBtn:{ display:"flex", alignItems:"center", gap:4, background:"none", border:"none", color:"#388BFF", fontSize:13, fontWeight:500 },
  // claim cards
  clList:{ display:"flex", flexDirection:"column", gap:12, marginBottom:28 },
  clCard:{ background:"#161B22", border:"1px solid #1E2533", borderRadius:14, padding:18, textAlign:"left", width:"100%", color:"#E2E8F0" },
  clTop:{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:6 },
  clId:{ fontSize:12, color:"#718096", fontFamily:"'JetBrains Mono',monospace", marginBottom:2 },
  clType:{ fontSize:15, fontWeight:600, color:"#F7FAFC" },
  pill:{ padding:"4px 12px", borderRadius:20, fontSize:12, fontWeight:600 },
  pillL:{ padding:"6px 16px", fontSize:14 },
  clDesc:{ fontSize:13, color:"#A0AEC0", marginBottom:10 },
  progO:{ height:4, background:"#2D3748", borderRadius:2, marginBottom:10, overflow:"hidden" },
  progI:{ height:"100%", borderRadius:2, transition:"width 0.5s ease" },
  clBot:{ display:"flex", gap:16, flexWrap:"wrap" },
  clMeta:{ display:"flex", alignItems:"center", gap:4, fontSize:12, color:"#718096" },
  // actions grid
  actG:{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:14 },
  actC:{ background:"#161B22", border:"1px solid #1E2533", borderRadius:14, padding:18, textAlign:"left", color:"#E2E8F0" },
  actIc:{ width:38, height:38, borderRadius:10, background:"#388BFF15", display:"flex", alignItems:"center", justifyContent:"center", color:"#388BFF", marginBottom:10 },
  actLbl:{ fontSize:14, fontWeight:600, color:"#F7FAFC", marginBottom:3 },
  actDsc:{ fontSize:12, color:"#718096" },
  // policies
  polG:{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:14, marginBottom:28 },
  polC:{ background:"#161B22", border:"1px solid #1E2533", borderRadius:14, overflow:"hidden" },
  polAc:{ height:3, width:"100%" },
  polHd:{ display:"flex", alignItems:"center", gap:12, padding:"14px 18px 0" },
  polIc:{ width:40, height:40, borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 },
  polNm:{ fontSize:14, fontWeight:600, color:"#F7FAFC", lineHeight:1.3 },
  polId:{ fontSize:11, color:"#718096", fontFamily:"'JetBrains Mono',monospace", marginTop:2 },
  polPill:{ padding:"3px 10px", borderRadius:20, fontSize:11, fontWeight:600, background:"#22A06B18", color:"#22A06B", flexShrink:0 },
  polDet:{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4px 14px", padding:"12px 18px" },
  polDL:{ fontSize:10, color:"#718096", textTransform:"uppercase", letterSpacing:"0.05em", fontWeight:600 },
  polDV:{ fontSize:12, color:"#CBD5E0", fontWeight:500, marginTop:1 },
  polFt:{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"10px 18px", borderTop:"1px solid #1E2533", background:"#0D111780" },
  polFBtn:{ display:"inline-flex", alignItems:"center", gap:6, padding:"7px 14px", border:"1px solid", borderRadius:8, fontSize:12, fontWeight:600, cursor:"pointer" },
  // selected policy banner
  spBan:{ display:"flex", alignItems:"center", gap:14, padding:"14px 18px", background:"#0D1117", border:"1px solid #1E2533", borderRadius:12, marginBottom:20 },
  spIc:{ width:42, height:42, borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 },
  spLbl:{ fontSize:10, color:"#718096", textTransform:"uppercase", letterSpacing:"0.06em", fontWeight:600 },
  spNm:{ fontSize:14, fontWeight:600, color:"#F7FAFC", marginTop:1 },
  spMt:{ fontSize:11, color:"#A0AEC0", marginTop:2, fontFamily:"'JetBrains Mono',monospace" },
  spChk:{ width:26, height:26, borderRadius:"50%", background:"#22A06B", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", flexShrink:0 },
  // page
  pgH:{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 },
  pgT:{ fontSize:22, fontWeight:700, color:"#F7FAFC" },
  priBtn:{ display:"inline-flex", alignItems:"center", gap:8, padding:"10px 20px", background:"#388BFF", border:"none", borderRadius:10, color:"#fff", fontSize:14, fontWeight:600 },
  secBtn:{ display:"inline-flex", alignItems:"center", gap:8, padding:"10px 20px", background:"transparent", border:"1px solid #2D3748", borderRadius:10, color:"#A0AEC0", fontSize:14, fontWeight:500 },
  subBtn:{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 32px", background:"linear-gradient(135deg,#22A06B,#388BFF)", border:"none", borderRadius:12, color:"#fff", fontSize:15, fontWeight:700, boxShadow:"0 4px 20px rgba(34,160,107,0.3)" },
  bkBtn:{ display:"inline-flex", alignItems:"center", gap:4, background:"none", border:"none", color:"#718096", fontSize:14, fontWeight:500, marginBottom:14 },
  // filters
  filtR:{ display:"flex", gap:8, marginBottom:18, flexWrap:"wrap" },
  filtB:{ padding:"7px 16px", background:"transparent", border:"1px solid #2D3748", borderRadius:8, color:"#A0AEC0", fontSize:13, fontWeight:500 },
  filtA:{ background:"#388BFF15", borderColor:"#388BFF40", color:"#388BFF" },
  // detail
  dHdr:{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:28 },
  dTitle:{ fontSize:22, fontWeight:700, color:"#F7FAFC", marginBottom:4 },
  dDesc:{ fontSize:14, color:"#A0AEC0" },
  dGrid:{ display:"grid", gridTemplateColumns:"minmax(0,1fr) 360px", gap:18 },
  dCard:{ background:"#161B22", border:"1px solid #1E2533", borderRadius:14, padding:22 },
  dCardT:{ fontSize:16, fontWeight:600, color:"#F7FAFC", marginBottom:18 },
  // timeline
  tlItem:{ display:"flex", alignItems:"flex-start", position:"relative", paddingBottom:22 },
  tlDot:{ width:26, height:26, borderRadius:"50%", border:"2px solid", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, color:"#fff", zIndex:1 },
  tlLine:{ position:"absolute", left:12, top:26, width:2, height:"calc(100% - 26px)" },
  tlCnt:{ marginLeft:12, paddingTop:2 },
  tlStep:{ fontSize:14, fontWeight:500 },
  tlDate:{ fontSize:12, color:"#718096", marginTop:1 },
  // info
  infoG:{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 },
  infoL:{ fontSize:11, color:"#718096", textTransform:"uppercase", letterSpacing:"0.05em", fontWeight:600, marginBottom:3 },
  infoV:{ fontSize:13, color:"#E2E8F0", fontWeight:500 },
  dAct:{ display:"flex", alignItems:"center", gap:10, padding:"11px 14px", background:"#0D1117", border:"1px solid #1E2533", borderRadius:10, color:"#E2E8F0", fontSize:13, fontWeight:500, width:"100%" },
  // wizard
  wzProg:{ display:"flex", alignItems:"flex-start", justifyContent:"center", marginBottom:28 },
  wzSW:{ display:"flex", flexDirection:"column", alignItems:"center", position:"relative", flex:1 },
  wzDot:{ width:30, height:30, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:12, fontWeight:700, zIndex:1 },
  wzLbl:{ fontSize:11, fontWeight:500, marginTop:5, textAlign:"center", maxWidth:80 },
  wzLine:{ position:"absolute", top:15, left:"50%", width:"100%", height:2 },
  wzCard:{ background:"#161B22", border:"1px solid #1E2533", borderRadius:16, padding:28, marginBottom:18 },
  wzST:{ fontSize:20, fontWeight:700, color:"#F7FAFC", marginBottom:6 },
  wzSD:{ fontSize:14, color:"#A0AEC0", marginBottom:20, lineHeight:1.5 },
  wzNav:{ display:"flex", justifyContent:"space-between", gap:12 },
  // type grid
  tyG:{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:12 },
  tyC:{ background:"#0D1117", border:"1px solid #2D3748", borderRadius:14, padding:18, textAlign:"center", color:"#E2E8F0" },
  tyCA:{ borderColor:"#388BFF", background:"#388BFF10", boxShadow:"0 0 0 1px #388BFF" },
  tyIc:{ width:46, height:46, borderRadius:14, background:"#1E2533", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 10px", color:"#A0AEC0" },
  tyIcA:{ background:"#388BFF20", color:"#388BFF" },
  tyLbl:{ fontSize:13, fontWeight:600, color:"#F7FAFC", marginBottom:3 },
  tyDsc:{ fontSize:11, color:"#718096" },
  // forms
  fG:{ display:"grid", gridTemplateColumns:"repeat(2,minmax(0,1fr))", gap:14 },
  fGrp:{ marginBottom:4 },
  fLbl:{ display:"block", fontSize:13, fontWeight:600, color:"#CBD5E0", marginBottom:5 },
  fIn:{ width:"100%", padding:"10px 13px", background:"#0D1117", border:"1px solid #2D3748", borderRadius:10, color:"#E2E8F0", fontSize:14, outline:"none" },
  fTa:{ width:"100%", padding:"10px 13px", background:"#0D1117", border:"1px solid #2D3748", borderRadius:10, color:"#E2E8F0", fontSize:14, resize:"vertical", outline:"none", lineHeight:1.5 },
  radG:{ display:"flex", gap:24 },
  radL:{ display:"flex", alignItems:"center", gap:8, fontSize:14, color:"#E2E8F0", cursor:"pointer" },
  cbG:{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))", gap:8 },
  cbL:{ display:"flex", alignItems:"center", gap:8, fontSize:13, color:"#E2E8F0", cursor:"pointer" },
  subH:{ fontSize:14, fontWeight:600, color:"#CBD5E0", marginBottom:10 },
  // vehicle
  vCont:{ display:"flex", flexDirection:"column", alignItems:"center", background:"#0D1117", borderRadius:14, border:"1px solid #1E2533", padding:20 },
  vSvg:{ width:260, height:240 },
  vHint:{ fontSize:12, color:"#718096", marginTop:10 },
  // severity
  sevR:{ display:"flex", gap:8, flexWrap:"wrap" },
  sevB:{ padding:"7px 14px", background:"#0D1117", border:"1px solid #2D3748", borderRadius:8, color:"#A0AEC0", fontSize:13, fontWeight:500 },
  sevBA:{ borderColor:"#E8A317", background:"#E8A31715", color:"#E8A317" },
  // upload
  upZ:{ border:"2px dashed #2D3748", borderRadius:16, padding:"36px 20px", textAlign:"center", cursor:"pointer", marginBottom:20 },
  upIc:{ width:52, height:52, borderRadius:14, background:"#388BFF15", display:"flex", alignItems:"center", justifyContent:"center", color:"#388BFF", margin:"0 auto 14px" },
  upT:{ fontSize:15, fontWeight:600, color:"#F7FAFC", marginBottom:3 },
  upH:{ fontSize:13, color:"#718096", marginBottom:14 },
  upBtn:{ display:"inline-flex", alignItems:"center", gap:8, padding:"10px 20px", background:"#388BFF15", border:"1px solid #388BFF40", borderRadius:10, color:"#388BFF", fontSize:14, fontWeight:600 },
  catG:{ display:"grid", gridTemplateColumns:"repeat(2,minmax(0,1fr))", gap:8 },
  catI:{ display:"flex", alignItems:"center", gap:10, padding:"9px 13px", background:"#0D1117", borderRadius:8, fontSize:13, color:"#CBD5E0" },
  fileI:{ display:"flex", alignItems:"center", gap:10, padding:"9px 13px", background:"#0D1117", border:"1px solid #1E2533", borderRadius:8, marginBottom:5, color:"#A0AEC0" },
  fileN:{ flex:1, fontSize:13, color:"#E2E8F0" },
  fileT:{ fontSize:12, color:"#718096" },
  fileX:{ width:24, height:24, background:"none", border:"none", color:"#718096", display:"flex", alignItems:"center", justifyContent:"center" },
  // 3rd party
  tpF:{ background:"#0D1117", borderRadius:14, border:"1px solid #1E2533", padding:18, marginTop:14 },
  // review
  rvSecs:{ display:"flex", flexDirection:"column", gap:14, marginBottom:20 },
  rvSec:{ background:"#0D1117", borderRadius:12, border:"1px solid #1E2533", padding:18 },
  rvSecT:{ fontSize:14, fontWeight:600, color:"#388BFF", marginBottom:10, textTransform:"uppercase", letterSpacing:"0.04em" },
  rvItem:{ display:"flex", justifyContent:"space-between", gap:12, padding:"7px 0", borderBottom:"1px solid #1E2533", flexWrap:"wrap" },
  rvL:{ fontSize:13, color:"#718096", fontWeight:500 },
  rvV:{ fontSize:13, color:"#E2E8F0", fontWeight:500, textAlign:"right", maxWidth:"60%" },
  legal:{ background:"#0D1117", border:"1px solid #2D3748", borderRadius:12, padding:18, marginBottom:20, fontSize:13, color:"#A0AEC0", lineHeight:1.6 },
  // success
  succS:{ textAlign:"center", padding:"36px 0" },
  succIc:{ width:68, height:68, borderRadius:"50%", background:"#22A06B", display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", margin:"0 auto 20px" },
  succT:{ fontSize:24, fontWeight:700, color:"#F7FAFC", marginBottom:10 },
  succD:{ fontSize:14, color:"#A0AEC0", maxWidth:480, margin:"0 auto 20px", lineHeight:1.6 },
  succInfo:{ display:"inline-flex", flexDirection:"column", gap:10, background:"#0D1117", borderRadius:14, border:"1px solid #1E2533", padding:22, textAlign:"left" },
  succRow:{ display:"flex", justifyContent:"space-between", gap:40 },
  // docs table
  dtbl:{ background:"#161B22", border:"1px solid #1E2533", borderRadius:14, overflow:"hidden" },
  dtH:{ display:"flex", padding:"12px 18px", background:"#0D1117", borderBottom:"1px solid #1E2533", fontSize:12, fontWeight:600, color:"#718096", textTransform:"uppercase", letterSpacing:"0.04em" },
  dtR:{ display:"flex", padding:"12px 18px", borderBottom:"1px solid #1E253380", fontSize:13, color:"#E2E8F0", alignItems:"center" },
  dtPill:{ padding:"3px 10px", borderRadius:6, background:"#1E2533", fontSize:11, fontWeight:600, color:"#A0AEC0" },
  // messages
  msgC:{ background:"#161B22", border:"1px solid #1E2533", borderRadius:16, overflow:"hidden" },
  msgHdr:{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"14px 22px", borderBottom:"1px solid #1E2533" },
  msgClId:{ fontSize:14, fontWeight:600, color:"#F7FAFC" },
  msgAdj:{ fontSize:12, color:"#718096", marginTop:2 },
  msgList:{ padding:22, display:"flex", flexDirection:"column", gap:14, maxHeight:400, overflowY:"auto" },
  msgBW:{ display:"flex" },
  msgB:{ maxWidth:"70%", padding:"11px 15px", borderRadius:14, width:"fit-content" },
  msgBA:{ background:"#0D1117", border:"1px solid #1E2533", borderBottomLeftRadius:4 },
  msgBU:{ background:"#388BFF15", border:"1px solid #388BFF30", borderBottomRightRadius:4 },
  msgSnd:{ fontSize:11, fontWeight:600, color:"#388BFF", marginBottom:3 },
  msgTxt:{ fontSize:14, color:"#E2E8F0", lineHeight:1.5 },
  msgTm:{ fontSize:11, color:"#718096", marginTop:5, textAlign:"right" },
  msgIR:{ display:"flex", gap:12, padding:"14px 22px", borderTop:"1px solid #1E2533", alignItems:"stretch" },
  msgIn:{ flex:1, padding:"10px 14px", background:"#0D1117", border:"1px solid #2D3748", borderRadius:10, color:"#E2E8F0", fontSize:14, outline:"none" },
  // notif
  nfDD:{ position:"absolute", top:"calc(100% + 8px)", right:0, width:320, maxWidth:"calc(100vw - 32px)", background:"#161B22", border:"1px solid #1E2533", borderRadius:14, boxShadow:"0 12px 40px rgba(0,0,0,0.5)", zIndex:200 },
  nfH:{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 14px", borderBottom:"1px solid #1E2533", fontSize:14, color:"#F7FAFC" },
  nfI:{ display:"flex", gap:10, padding:"10px 14px", borderBottom:"1px solid #1E253380", alignItems:"flex-start" },
  nfIc:{ width:34, height:34, borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 },
  nfTx:{ fontSize:13, color:"#E2E8F0", lineHeight:1.4 },
  nfTm:{ fontSize:11, color:"#718096", marginTop:2 },
  // modal
  modOv:{ position:"fixed", inset:0, background:"rgba(0,0,0,0.7)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:1000 },
  mod:{ background:"#161B22", border:"1px solid #1E2533", borderRadius:20, padding:28, maxWidth:540, width:"90%", maxHeight:"90vh", overflowY:"auto" },
  modH:{ display:"flex", alignItems:"center", gap:12, marginBottom:14 },
  emIc:{ width:38, height:38, borderRadius:12, background:"#E3493520", display:"flex", alignItems:"center", justifyContent:"center", color:"#E34935" },
  modT:{ flex:1, fontSize:18, fontWeight:700, color:"#F7FAFC" },
  modD:{ fontSize:14, color:"#A0AEC0", marginBottom:20, lineHeight:1.5 },
  emG:{ display:"grid", gridTemplateColumns:"repeat(2,minmax(0,1fr))", gap:10, marginBottom:20 },
  emC:{ background:"#0D1117", border:"1px solid #1E2533", borderRadius:12, padding:14 },
  emL:{ fontSize:12, fontWeight:600, color:"#718096", marginBottom:3 },
  emN:{ fontSize:16, fontWeight:700, color:"#F7FAFC", fontFamily:"'JetBrains Mono',monospace", marginBottom:3 },
  emD:{ fontSize:12, color:"#A0AEC0" },
  emTips:{ background:"#0D1117", borderRadius:12, padding:18, border:"1px solid #1E2533" },
  tipI:{ display:"flex", alignItems:"center", gap:10, fontSize:13, color:"#E2E8F0", marginBottom:6 },
};

const CSS = `

@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'DM Sans',sans-serif;background:#0D1117;color:#E2E8F0}
input[type="date"],input[type="time"]{color-scheme:dark}
::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:#2D3748;border-radius:3px}
button{cursor:pointer;font-family:inherit}input,textarea{font-family:inherit}
@keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
@media (max-width: 768px){
  .hdr-in{height:auto !important;padding:12px 16px !important;flex-wrap:wrap;gap:12px}
  .hdr-nav{order:3;width:100%;overflow-x:auto;padding-bottom:4px}
  .hdr-nav::-webkit-scrollbar{display:none}
  .hdr-nav button{white-space:nowrap}
  .main-wrap{padding:20px 16px 40px !important}
  .hero{padding:24px !important;flex-direction:column;align-items:flex-start !important;gap:20px}
  .hero-gfx{display:none !important}
  .stats-grid,.policies-grid,.actions-grid,.detail-grid,.type-grid,.form-grid,.checkbox-grid,.category-grid{grid-template-columns:1fr !important}
  .emergency-grid{grid-template-columns:1fr 1fr !important}
  .page-header,.detail-header,.section-header,.wizard-nav,.claim-top,.policy-footer,.message-input,.success-actions{flex-direction:column;align-items:stretch !important}
  .filters-row,.claim-meta,.severity-row{flex-wrap:wrap}
  .radio-group{flex-direction:column;gap:12px}
  .wizard-progress{overflow-x:auto;justify-content:flex-start;padding-bottom:8px}
  .wizard-step{min-width:78px}
  .wizard-line{display:none}
  .vehicle-svg{width:100%;max-width:260px;height:auto}
  .docs-table{overflow-x:auto}
  .docs-header,.docs-row{min-width:720px}
  .msg-bubble{max-width:88% !important}
  .notif-dd{width:min(320px,calc(100vw - 32px)) !important;right:-8px !important}
}
@media (max-width: 520px){
  .stats-grid,.policies-grid,.actions-grid,.type-grid,.form-grid,.checkbox-grid,.category-grid,.emergency-grid{grid-template-columns:1fr !important}
  .page-header h1,.detail-header h1{font-size:20px !important}
  .success-actions button,.wizard-nav button,.page-header button,.message-input button,.policy-footer button{width:100%}
  .message-input input{width:100%}
}
`;

// ── MAIN APP ──
export default function App() {
  const [view, setView] = useState("dashboard");
  const [selClaim, setSelClaim] = useState(null);
  const [showNotif, setShowNotif] = useState(false);
  const [wStep, setWStep] = useState(0);
  const [wData, setWData] = useState({});
  const [showEm, setShowEm] = useState(false);
  const [fade, setFade] = useState(true);

  useEffect(() => { setFade(false); const t = setTimeout(() => setFade(true), 50); return () => clearTimeout(t); }, [view]);

  const nav = (v, d = null) => {
    setView(v);
    if (v === "claim-detail" && d) setSelClaim(d);
    if (v === "new-claim") {
      setWStep(0);
      if (d && d.policyId) setWData({ policyNumber: d.policyId, selectedPolicy: d });
      else setWData({});
    }
  };

  return (
    <div style={S.app}>
      <style>{CSS}</style>
      <header style={S.hdr}>
        <div className="hdr-in" style={S.hdrIn}>
          <div style={S.logo} onClick={() => nav("dashboard")}>
            <div style={S.logoMk}><I.Shield /></div>
            <div><div style={S.logoTxt}>ClaimShield</div><div style={S.logoSub}>First Notice of Loss</div></div>
          </div>
          <nav className="hdr-nav" style={S.nav}>
            {[["dashboard","Dashboard"],["my-claims","My Claims"],["documents","Documents"],["messages","Messages"]].map(([k,l]) => (
              <button key={k} onClick={() => nav(k)} style={{...S.navL,...(view===k?S.navA:{})}}>{l}{k==="messages"&&<span style={S.badge}>2</span>}</button>
            ))}
          </nav>
          <div style={S.hdrR}>
            <button style={S.emBtn} onClick={() => setShowEm(true)}><I.Phone /> Emergency</button>
            <div style={{position:"relative"}}>
              <button style={S.icnBtn} onClick={() => setShowNotif(!showNotif)}><I.Bell /><span style={S.dot}/></button>
              {showNotif && <NotifDrop onClose={() => setShowNotif(false)} />}
            </div>
            <div style={S.avatar}>DM</div>
          </div>
        </div>
      </header>
      <main className="main-wrap" style={{...S.main,opacity:fade?1:0,transition:"opacity 0.3s"}}>
        {view==="dashboard" && <Dashboard nav={nav}/>}
        {view==="my-claims" && <MyClaims nav={nav}/>}
        {view==="new-claim" && <Wizard step={wStep} setStep={setWStep} data={wData} setData={setWData} nav={nav}/>}
        {view==="claim-detail" && <ClaimDetail claim={selClaim} nav={nav}/>}
        {view==="documents" && <Documents/>}
        {view==="messages" && <Messages/>}
      </main>
      {showEm && <EmergencyModal onClose={() => setShowEm(false)}/>}
    </div>
  );
}

// ── DASHBOARD ──
function Dashboard({nav}) {
  return (
    <div style={S.cnt}>
      <div className="hero" style={S.hero}>
        <div className="hero-copy" style={S.heroC}>
          <h1 style={S.heroT}>Need to report a loss?</h1>
          <p style={S.heroS}>File your claim in minutes. Our guided process walks you through every step — upload photos, describe what happened, and track in real time.</p>
          <button style={S.heroCTA} onClick={() => nav("new-claim")}><I.Plus /> File a New Claim</button>
        </div>
        <div className="hero-gfx" style={S.heroGfx}><I.Shield /></div>
      </div>
      <div className="stats-grid" style={S.stats}>
        {[{l:"Active Claims",v:"2",a:"#E8A317"},{l:"Settled This Year",v:"1",a:"#22A06B"},{l:"Pending Documents",v:"1",a:"#E34935"},{l:"Est. Total Payout",v:"$24,650",a:"#388BFF"}].map((s,i) => (
          <div key={i} style={S.statC}><div style={{...S.statAc,background:s.a}}/><div style={S.statV}>{s.v}</div><div style={S.statL}>{s.l}</div></div>
        ))}
      </div>

      {/* ACTIVE POLICIES */}
      <div className="section-header" style={S.secH}><h2 style={S.secT}>Active Policies</h2><span style={{fontSize:13,color:"#718096"}}>{policies.length} policies</span></div>
      <div className="policies-grid" style={S.polG}>
        {policies.map(p => <PolicyCard key={p.id} p={p} onFile={() => nav("new-claim",{policyId:p.id,policyType:p.type,policyName:p.name,policyCoverage:p.coverage,policyDeductible:p.deductible,policyAsset:p.asset})}/>)}
      </div>

      <div className="section-header" style={S.secH}><h2 style={S.secT}>Recent Claims</h2><button style={S.txtBtn} onClick={() => nav("my-claims")}>View All <I.Right /></button></div>
      <div style={S.clList}>{claims.slice(0,2).map(c => <ClaimCard key={c.id} c={c} onClick={() => nav("claim-detail",c)}/>)}</div>

      <div className="section-header" style={S.secH}><h2 style={S.secT}>Quick Actions</h2></div>
      <div className="actions-grid" style={S.actG}>
        {[{ic:<I.Upload/>,l:"Upload Documents",d:"Add photos, reports, or receipts",a:()=>nav("documents")},{ic:<I.Msg/>,l:"Message Adjuster",d:"Chat with your assigned adjuster",a:()=>nav("messages")},{ic:<I.Search/>,l:"Check Claim Status",d:"Real-time tracking of your claims",a:()=>nav("my-claims")},{ic:<I.Phone/>,l:"Request Callback",d:"Schedule a call with our team",a:()=>{}}].map((a,i) => (
          <button key={i} style={S.actC} onClick={a.a}><div style={S.actIc}>{a.ic}</div><div style={S.actLbl}>{a.l}</div><div style={S.actDsc}>{a.d}</div></button>
        ))}
      </div>
    </div>
  );
}

// ── POLICY CARD ──
function PolicyCard({p,onFile}) {
  const ac = p.type==="Auto"?"#388BFF":"#22A06B";
  return (
    <div style={S.polC}>
      <div style={{...S.polAc,background:ac}}/>
      <div style={S.polHd}>
        <div style={{...S.polIc,background:ac+"18",color:ac}}>{p.type==="Auto"?<I.Car/>:<I.Home/>}</div>
        <div style={{flex:1}}><div style={S.polNm}>{p.name}</div><div style={S.polId}>{p.id}</div></div>
        <span style={S.polPill}>Active</span>
      </div>
      <div style={S.polDet}>
        {[["Coverage",p.coverage],["Deductible",p.deductible],["Premium",p.premium],["Renewal",p.renewal]].map(([l,v],i) => (
          <div key={i}><div style={S.polDL}>{l}</div><div style={S.polDV}>{v}</div></div>
        ))}
      </div>
      <div className="policy-footer" style={S.polFt}>
        <span style={{fontSize:12,fontWeight:500,color:p.claims>0?"#E8A317":"#718096"}}>{p.claims>0?`${p.claims} active claim${p.claims!==1?"s":""}`:"No active claims"}</span>
        <button style={{...S.polFBtn,borderColor:ac+"50",color:ac,background:ac+"10"}} onClick={onFile}><I.Plus /> File Claim</button>
      </div>
    </div>
  );
}

// ── CLAIM CARD ──
function ClaimCard({c,onClick}) {
  return (
    <button style={S.clCard} onClick={onClick}>
      <div className="claim-top" style={S.clTop}><div><div style={S.clId}>{c.id}</div><div style={S.clType}>{c.type}</div></div><span style={{...S.pill,background:c.sc+"18",color:c.sc}}>{c.status}</span></div>
      <div style={S.clDesc}>{c.desc}</div>
      <div style={S.progO}><div style={{...S.progI,width:`${c.progress}%`,background:c.sc}}/></div>
      <div className="claim-meta" style={S.clBot}><span style={S.clMeta}><I.Clock /> {c.date}</span><span style={S.clMeta}><I.FileText /> {c.docs} docs</span><span style={S.clMeta}><I.Msg /> {c.msgs} msgs</span></div>
    </button>
  );
}

// ── MY CLAIMS ──
function MyClaims({nav}) {
  const [f,setF] = useState("all");
  const fl = f==="all"?claims:claims.filter(c => f==="active"?c.status!=="Settled":c.status==="Settled");
  return (
    <div style={S.cnt}>
      <div className="page-header" style={S.pgH}><h1 style={S.pgT}>My Claims</h1><button style={S.priBtn} onClick={() => nav("new-claim")}><I.Plus /> New Claim</button></div>
      <div className="filters-row" style={S.filtR}>{["all","active","settled"].map(x => <button key={x} style={{...S.filtB,...(f===x?S.filtA:{})}} onClick={() => setF(x)}>{x.charAt(0).toUpperCase()+x.slice(1)}</button>)}</div>
      <div style={S.clList}>{fl.map(c => <ClaimCard key={c.id} c={c} onClick={() => nav("claim-detail",c)}/>)}</div>
    </div>
  );
}

// ── CLAIM DETAIL ──
function ClaimDetail({claim:c,nav}) {
  if(!c) return null;
  const tl = [
    {s:"FNOL Filed",d:c.date,ok:true},{s:"Coverage Verified",d:"Apr 9",ok:c.progress>=30},{s:"Adjuster Assigned",d:"Apr 9",ok:c.progress>=30},
    {s:"Under Investigation",d:c.progress>=40?"Apr 10":"Pending",ok:c.progress>=40},{s:"Estimate Prepared",d:c.progress>=60?"Apr 16":"Pending",ok:c.progress>=60},
    {s:"Approval & Payment",d:c.progress>=85?"Apr 18":"Pending",ok:c.progress>=85},{s:"Claim Closed",d:c.progress===100?"Nov 28":"Pending",ok:c.progress===100}
  ];
  return (
    <div style={S.cnt}>
      <button style={S.bkBtn} onClick={() => nav("my-claims")}><I.Left /> Back to Claims</button>
      <div className="detail-header" style={S.dHdr}><div><div style={S.clId}>{c.id}</div><h1 style={S.dTitle}>{c.type}</h1><p style={S.dDesc}>{c.desc}</p></div><span style={{...S.pill,...S.pillL,background:c.sc+"18",color:c.sc}}>{c.status}</span></div>
      <div className="detail-grid" style={S.dGrid}>
        <div style={S.dCard}>
          <h3 style={S.dCardT}>Claim Timeline</h3>
          <div>{tl.map((t,i) => (
            <div key={i} style={S.tlItem}>
              <div style={{...S.tlDot,background:t.ok?c.sc:"transparent",borderColor:t.ok?c.sc:"#4A5568"}}>{t.ok&&<I.Check/>}</div>
              {i<tl.length-1&&<div style={{...S.tlLine,background:t.ok?c.sc:"#2D3748"}}/>}
              <div style={S.tlCnt}><div style={{...S.tlStep,color:t.ok?"#E2E8F0":"#718096"}}>{t.s}</div><div style={S.tlDate}>{t.d}</div></div>
            </div>
          ))}</div>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          <div style={S.dCard}>
            <h3 style={S.dCardT}>Claim Details</h3>
            <div style={S.infoG}>{[["Claim #",c.id],["Type",c.type],["Date of Loss",c.date],["Adjuster",c.adjuster],["Est. Payout",c.payout],["Next Step",c.next]].map(([l,v],i)=><div key={i}><div style={S.infoL}>{l}</div><div style={S.infoV}>{v}</div></div>)}</div>
          </div>
          <div style={S.dCard}>
            <h3 style={S.dCardT}>Quick Actions</h3>
            <div style={{display:"flex",flexDirection:"column",gap:7}}>
              <button style={S.dAct} onClick={() => nav("messages")}><I.Msg /> Message Adjuster</button>
              <button style={S.dAct} onClick={() => nav("documents")}><I.Upload /> Upload Documents</button>
              <button style={S.dAct}><I.DL /> Download Summary</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── WIZARD ──
function Wizard({step,setStep,data,setData,nav}) {
  const steps=["Loss Type","Incident Details","Damage","Evidence","Third Parties","Review"];
  const up=(k,v)=>setData(p=>({...p,[k]:v}));
  return (
    <div style={S.cnt}>
      <button style={S.bkBtn} onClick={() => step===0?nav("dashboard"):setStep(step-1)}><I.Left /> {step===0?"Cancel":"Back"}</button>
      <h1 style={S.pgT}>File a New Claim</h1>
      <div className="wizard-progress" style={S.wzProg}>{steps.map((s,i) => (
        <div key={i} className="wizard-step" style={S.wzSW}>
          <div style={{...S.wzDot,background:i<step?"#22A06B":i===step?"#388BFF":"#2D3748",color:i<=step?"#fff":"#718096"}}>{i<step?<I.Check/>:i+1}</div>
          <div style={{...S.wzLbl,color:i<=step?"#E2E8F0":"#718096"}}>{s}</div>
          {i<steps.length-1&&<div className="wizard-line" style={{...S.wzLine,background:i<step?"#22A06B":"#2D3748"}}/>}
        </div>
      ))}</div>
      <div style={S.wzCard}>
        {step===0&&<Step0 d={data} up={up}/>}
        {step===1&&<Step1 d={data} up={up}/>}
        {step===2&&<Step2 d={data} up={up}/>}
        {step===3&&<Step3 d={data} up={up}/>}
        {step===4&&<Step4 d={data} up={up}/>}
        {step===5&&<Step5 d={data} nav={nav}/>}
      </div>
      {step<5&&<div className="wizard-nav" style={S.wzNav}><button style={S.secBtn} onClick={() => step===0?nav("dashboard"):setStep(step-1)}>{step===0?"Cancel":"Previous"}</button><button style={S.priBtn} onClick={() => setStep(step+1)}>{step===4?"Review Claim":"Continue"} <I.Right /></button></div>}
    </div>
  );
}

// Step 0 — Loss Type
function Step0({d,up}) {
  const pol = d.selectedPolicy;
  const isAuto = pol?.policyType==="Auto";
  const all = [
    {k:"auto-collision",ic:<I.Car/>,l:"Auto Collision",ds:"Vehicle accident or collision",g:"auto"},
    {k:"auto-theft",ic:<I.Car/>,l:"Auto Theft / Vandalism",ds:"Stolen vehicle or intentional damage",g:"auto"},
    {k:"property-water",ic:<I.Drop/>,l:"Water Damage",ds:"Flooding, burst pipes, or leaks",g:"prop"},
    {k:"property-fire",ic:<I.Flame/>,l:"Fire Damage",ds:"Fire or smoke-related damage",g:"prop"},
    {k:"property-storm",ic:<I.Wind/>,l:"Storm / Weather",ds:"Hail, wind, lightning damage",g:"prop"},
    {k:"property-theft",ic:<I.Box/>,l:"Property Theft",ds:"Burglary or stolen belongings",g:"prop"},
  ];
  const types = pol ? all.filter(t => isAuto?t.g==="auto":t.g==="prop") : all;
  return (
    <div>
      {pol && (
        <div style={S.spBan}>
          <div style={{...S.spIc,background:isAuto?"#388BFF18":"#22A06B18",color:isAuto?"#388BFF":"#22A06B"}}>{isAuto?<I.Car/>:<I.Home/>}</div>
          <div style={{flex:1}}>
            <div style={S.spLbl}>Filing claim under policy</div>
            <div style={S.spNm}>{pol.policyName}</div>
            <div style={S.spMt}>{pol.policyId} · Deductible: {pol.policyDeductible}</div>
          </div>
          <div style={S.spChk}><I.Check/></div>
        </div>
      )}
      <h2 style={S.wzST}>What type of loss occurred?</h2>
      <p style={S.wzSD}>{pol?`Based on your ${pol.policyType.toLowerCase()} policy, select the loss category.`:"Select the category that best describes your incident."}</p>
      <div className="type-grid" style={S.tyG}>{types.map(t => (
        <button key={t.k} style={{...S.tyC,...(d.lossType===t.k?S.tyCA:{})}} onClick={() => up("lossType",t.k)}>
          <div style={{...S.tyIc,...(d.lossType===t.k?S.tyIcA:{})}}>{t.ic}</div>
          <div style={S.tyLbl}>{t.l}</div><div style={S.tyDsc}>{t.ds}</div>
        </button>
      ))}</div>
    </div>
  );
}

// Step 1 — Incident Details
function Step1({d,up}) {
  return (
    <div>
      <h2 style={S.wzST}>When and where did it happen?</h2>
      <p style={S.wzSD}>Provide the date, time, and location. Accurate details help accelerate your claim.</p>
      <div className="form-grid" style={S.fG}>
        <div style={S.fGrp}><label style={S.fLbl}>Date of Incident *</label><input type="date" style={S.fIn} value={d.incidentDate||""} onChange={e => up("incidentDate",e.target.value)}/></div>
        <div style={S.fGrp}><label style={S.fLbl}>Time of Incident</label><input type="time" style={S.fIn} value={d.incidentTime||""} onChange={e => up("incidentTime",e.target.value)}/></div>
        <div style={{...S.fGrp,gridColumn:"1/-1"}}><label style={S.fLbl}>Location / Address *</label><input type="text" placeholder="Enter address or describe the location" style={S.fIn} value={d.location||""} onChange={e => up("location",e.target.value)}/></div>
        <div style={{...S.fGrp,gridColumn:"1/-1"}}><label style={S.fLbl}>Policy Number *</label><input type="text" placeholder="e.g. POL-2024-00892" style={{...S.fIn,...(d.policyNumber?{borderColor:"#22A06B40",background:"#22A06B08"}:{})}} value={d.policyNumber||""} onChange={e => up("policyNumber",e.target.value)}/>{d.policyNumber && d.selectedPolicy && <div style={{fontSize:11,color:"#22A06B",marginTop:4}}>Auto-filled from selected policy</div>}</div>
        <div style={{...S.fGrp,gridColumn:"1/-1"}}><label style={S.fLbl}>Were emergency services called?</label><div className="radio-group" style={S.radG}>{["Yes","No"].map(o => <label key={o} style={S.radL}><input type="radio" name="em" checked={d.emergencyCalled===o} onChange={() => up("emergencyCalled",o)} style={{accentColor:"#388BFF"}}/>{o}</label>)}</div></div>
        {d.emergencyCalled==="Yes"&&<div style={{...S.fGrp,gridColumn:"1/-1"}}><label style={S.fLbl}>Police Report Number</label><input type="text" placeholder="Enter report number" style={S.fIn} value={d.policeReport||""} onChange={e => up("policeReport",e.target.value)}/></div>}
      </div>
    </div>
  );
}

// Step 2 — Damage
function Step2({d,up}) {
  const isAuto = d.lossType?.startsWith("auto");
  return (
    <div>
      <h2 style={S.wzST}>Describe the damage</h2>
      <p style={S.wzSD}>The more detail you provide, the faster we can process your claim.</p>
      {isAuto && <VehicleDmg d={d} up={up}/>}
      {!isAuto && <div style={S.fGrp}><label style={S.fLbl}>Affected areas</label><div className="checkbox-grid" style={S.cbG}>{["Roof","Exterior Walls","Windows","Basement","Kitchen","Bathroom","Living Room","Garage","Other"].map(a => <label key={a} style={S.cbL}><input type="checkbox" checked={(d.areas||[]).includes(a)} onChange={() => {const c=d.areas||[];up("areas",c.includes(a)?c.filter(x=>x!==a):[...c,a])}} style={{accentColor:"#388BFF"}}/>{a}</label>)}</div></div>}
      <div style={{...S.fGrp,marginTop:20}}><label style={S.fLbl}>Describe what happened *</label><textarea rows={4} placeholder="Tell us what happened..." style={S.fTa} value={d.description||""} onChange={e => up("description",e.target.value)}/></div>
      <div style={S.fGrp}><label style={S.fLbl}>Severity</label><div className="severity-row" style={S.sevR}>{["Minor","Moderate","Significant","Severe","Total Loss"].map(s => <button key={s} style={{...S.sevB,...(d.severity===s?S.sevBA:{})}} onClick={() => up("severity",s)}>{s}</button>)}</div></div>
      <div style={S.fGrp}><label style={S.fLbl}>Were there injuries?</label><div className="radio-group" style={S.radG}>{["Yes","No"].map(o => <label key={o} style={S.radL}><input type="radio" name="inj" checked={d.injuries===o} onChange={() => up("injuries",o)} style={{accentColor:"#388BFF"}}/>{o}</label>)}</div></div>
    </div>
  );
}

function VehicleDmg({d,up}) {
  const panels = [{id:"front",l:"Front",x:120,y:15,w:60,h:28},{id:"hood",l:"Hood",x:105,y:43,w:90,h:38},{id:"windshield",l:"Windshield",x:110,y:81,w:80,h:24},{id:"roof",l:"Roof",x:110,y:105,w:80,h:46},{id:"rear-win",l:"Rear Win",x:110,y:151,w:80,h:24},{id:"trunk",l:"Trunk",x:105,y:175,w:90,h:32},{id:"rear",l:"Rear",x:120,y:207,w:60,h:28},{id:"l-front",l:"L Front",x:50,y:50,w:55,h:46},{id:"l-rear",l:"L Rear",x:50,y:140,w:55,h:46},{id:"r-front",l:"R Front",x:195,y:50,w:55,h:46},{id:"r-rear",l:"R Rear",x:195,y:140,w:55,h:46}];
  const sel = d.dmgPanels||[];
  const tog = id => up("dmgPanels",sel.includes(id)?sel.filter(p=>p!==id):[...sel,id]);
  return (
    <div style={{marginBottom:20}}>
      <h3 style={S.subH}>Select damaged areas</h3>
      <div style={S.vCont}>
        <svg className="vehicle-svg" viewBox="0 0 300 250" style={S.vSvg}>
          <path d="M150 10 Q200 10 210 30 L230 55 Q250 60 250 80 L250 175 Q250 195 230 200 L210 225 Q200 245 150 245 Q100 245 90 225 L70 200 Q50 195 50 175 L50 80 Q50 60 70 55 L90 30 Q100 10 150 10Z" fill="#1A202C" stroke="#4A5568" strokeWidth="2"/>
          {panels.map(p => (
            <g key={p.id} onClick={() => tog(p.id)} style={{cursor:"pointer"}}>
              <rect x={p.x} y={p.y} width={p.w} height={p.h} rx={4} fill={sel.includes(p.id)?"rgba(227,73,53,0.5)":"rgba(74,85,104,0.25)"} stroke={sel.includes(p.id)?"#E34935":"#4A5568"} strokeWidth={sel.includes(p.id)?2:1}/>
              <text x={p.x+p.w/2} y={p.y+p.h/2+4} textAnchor="middle" fill={sel.includes(p.id)?"#fff":"#A0AEC0"} fontSize="8" fontFamily="inherit">{p.l}</text>
            </g>
          ))}
        </svg>
        <div style={S.vHint}>{sel.length} area{sel.length!==1?"s":""} selected</div>
      </div>
    </div>
  );
}

// Step 3 — Evidence
function Step3({d,up}) {
  const [files,setFiles] = useState(d.files||[]);
  const add = () => { const nf=[...files,{name:`damage_photo_${files.length+1}.jpg`,time:"Just now"}]; setFiles(nf); up("files",nf); };
  const rem = i => { const nf=files.filter((_,j)=>j!==i); setFiles(nf); up("files",nf); };
  return (
    <div>
      <h2 style={S.wzST}>Upload evidence & photos</h2>
      <p style={S.wzSD}>Photos, videos, and documents help adjusters assess faster.</p>
      <div style={S.upZ} onClick={add}><div style={S.upIc}><I.Camera/></div><div style={S.upT}>Drag & drop or click to browse</div><div style={S.upH}>JPG, PNG, PDF, MP4 — Max 25MB</div><button style={S.upBtn}><I.Upload /> Choose Files</button></div>
      <div style={{marginBottom:20}}><h3 style={S.subH}>Recommended uploads:</h3><div className="category-grid" style={S.catG}>{["Damage photos (close-up & wide)","Scene / surroundings photos","Police or incident report","Dashcam footage","Repair estimates","Medical reports"].map((c,i) => <div key={i} style={S.catI}><span style={{color:files.length>i?"#22A06B":"#4A5568"}}>{files.length>i?<I.Check/>:<I.Plus/>}</span>{c}</div>)}</div></div>
      {files.length>0&&<div><h3 style={S.subH}>Uploaded ({files.length})</h3>{files.map((f,i) => <div key={i} style={S.fileI}><I.FileText/><span style={S.fileN}>{f.name}</span><span style={S.fileT}>{f.time}</span><button style={S.fileX} onClick={e=>{e.stopPropagation();rem(i)}}><I.X/></button></div>)}</div>}
    </div>
  );
}

// Step 4 — Third Parties
function Step4({d,up}) {
  return (
    <div>
      <h2 style={S.wzST}>Third party & witness info</h2>
      <p style={S.wzSD}>If others were involved, provide their details (optional).</p>
      <div style={S.fGrp}><label style={S.fLbl}>Other parties involved?</label><div className="radio-group" style={S.radG}>{["Yes","No"].map(o => <label key={o} style={S.radL}><input type="radio" name="tp" checked={d.tp===o} onChange={() => up("tp",o)} style={{accentColor:"#388BFF"}}/>{o}</label>)}</div></div>
      {d.tp==="Yes"&&<div style={S.tpF}><div style={S.fG}>
        <div style={S.fGrp}><label style={S.fLbl}>Name</label><input type="text" placeholder="Full name" style={S.fIn} value={d.tpName||""} onChange={e => up("tpName",e.target.value)}/></div>
        <div style={S.fGrp}><label style={S.fLbl}>Phone</label><input type="tel" placeholder="(XXX) XXX-XXXX" style={S.fIn} value={d.tpPhone||""} onChange={e => up("tpPhone",e.target.value)}/></div>
        <div style={S.fGrp}><label style={S.fLbl}>Insurer</label><input type="text" placeholder="Their insurer" style={S.fIn} value={d.tpIns||""} onChange={e => up("tpIns",e.target.value)}/></div>
        <div style={S.fGrp}><label style={S.fLbl}>Policy #</label><input type="text" placeholder="If known" style={S.fIn} value={d.tpPol||""} onChange={e => up("tpPol",e.target.value)}/></div>
      </div></div>}
      <div style={{...S.fGrp,marginTop:20}}><label style={S.fLbl}>Witnesses (optional)</label><textarea rows={3} placeholder="List witness names and contact info" style={S.fTa} value={d.witnesses||""} onChange={e => up("witnesses",e.target.value)}/></div>
    </div>
  );
}

// Step 5 — Review
function Step5({d,nav}) {
  const [done,setDone] = useState(false);
  const ltL = {"auto-collision":"Auto Collision","auto-theft":"Auto Theft/Vandalism","property-water":"Water Damage","property-fire":"Fire Damage","property-storm":"Storm/Weather","property-theft":"Property Theft"};
  if(done) return (
    <div style={S.succS}>
      <div style={S.succIc}><I.Check/></div>
      <h2 style={S.succT}>Claim Submitted!</h2>
      <p style={S.succD}>Your claim has been received as <strong>CLM-2026-04201</strong>. An adjuster will reach out within 24 hours.</p>
      <div style={S.succInfo}>{[["Claim #","CLM-2026-04201"],["Response Time","Within 24 hours"],["Next Step","Coverage verification"]].map(([l,v],i)=><div key={i} style={S.succRow}><span style={S.infoL}>{l}</span><span style={S.infoV}>{v}</span></div>)}</div>
      <div className="success-actions" style={{display:"flex",gap:12,marginTop:20,justifyContent:"center"}}><button style={S.priBtn} onClick={() => nav("dashboard")}>Dashboard</button><button style={S.secBtn} onClick={() => nav("my-claims")}>My Claims</button></div>
    </div>
  );
  const RS = ({t,items}) => <div style={S.rvSec}><h3 style={S.rvSecT}>{t}</h3>{items.map(([l,v],i)=><div key={i} style={S.rvItem}><span style={S.rvL}>{l}</span><span style={S.rvV}>{v}</span></div>)}</div>;
  return (
    <div>
      <h2 style={S.wzST}>Review your claim</h2>
      <p style={S.wzSD}>Verify all details before submitting.</p>
      <div style={S.rvSecs}>
        {d.selectedPolicy && <RS t="Policy" items={[["Policy",d.selectedPolicy.policyName],["Policy #",d.selectedPolicy.policyId],["Coverage",d.selectedPolicy.policyCoverage],["Deductible",d.selectedPolicy.policyDeductible]]}/>}
        <RS t="Loss Type" items={[["Category",ltL[d.lossType]||"Not selected"]]}/>
        <RS t="Incident" items={[["Date",d.incidentDate||"—"],["Time",d.incidentTime||"—"],["Location",d.location||"—"],["Policy #",d.policyNumber||"—"],["Emergency",d.emergencyCalled||"—"]]}/>
        <RS t="Damage" items={[["Description",d.description||"—"],["Severity",d.severity||"—"],["Injuries",d.injuries||"—"]]}/>
        <RS t="Evidence" items={[["Files",`${(d.files||[]).length} file(s)`]]}/>
        <RS t="Third Parties" items={[["Involved",d.tp||"—"],...(d.tpName?[["Name",d.tpName]]:[])]}/>
      </div>
      <div style={S.legal}><label style={S.cbL}><input type="checkbox" style={{accentColor:"#388BFF"}}/> I certify this information is true and accurate. Providing false information may result in claim denial.</label></div>
      <div style={S.wzNav}><div/><button style={S.subBtn} onClick={() => setDone(true)}><I.Check /> Submit Claim</button></div>
    </div>
  );
}

// ── DOCUMENTS ──
function Documents() {
  const docs = [
    {n:"Auto_Damage_Photos.zip",cl:"CLM-2026-04187",d:"Apr 8, 2026",t:"Photos",sz:"4.2 MB"},
    {n:"Police_Report_4187.pdf",cl:"CLM-2026-04187",d:"Apr 9, 2026",t:"Report",sz:"842 KB"},
    {n:"Repair_Estimate.pdf",cl:"CLM-2026-04187",d:"Apr 10, 2026",t:"Estimate",sz:"1.1 MB"},
    {n:"Basement_Water_Photos.zip",cl:"CLM-2026-03952",d:"Mar 22, 2026",t:"Photos",sz:"8.7 MB"},
    {n:"Plumber_Invoice.pdf",cl:"CLM-2026-03952",d:"Mar 24, 2026",t:"Invoice",sz:"265 KB"},
    {n:"Remediation_Report.pdf",cl:"CLM-2026-03952",d:"Mar 28, 2026",t:"Report",sz:"1.8 MB"},
  ];
  return (
    <div style={S.cnt}>
      <div className="page-header" style={S.pgH}><h1 style={S.pgT}>Documents</h1><button style={S.priBtn}><I.Upload /> Upload New</button></div>
      <div className="docs-table" style={S.dtbl}>
        <div className="docs-header" style={S.dtH}><span style={{flex:3}}>File</span><span style={{flex:2}}>Claim</span><span style={{flex:1}}>Type</span><span style={{flex:1}}>Size</span><span style={{flex:1.5}}>Date</span><span style={{flex:.5}}></span></div>
        {docs.map((d,i) => <div key={i} className="docs-row" style={S.dtR}><span style={{flex:3,display:"flex",alignItems:"center",gap:8}}><I.FileText/>{d.n}</span><span style={{flex:2,color:"#A0AEC0"}}>{d.cl}</span><span style={{flex:1}}><span style={S.dtPill}>{d.t}</span></span><span style={{flex:1,color:"#A0AEC0"}}>{d.sz}</span><span style={{flex:1.5,color:"#A0AEC0"}}>{d.d}</span><span style={{flex:.5}}><button style={S.icnSm}><I.DL/></button></span></div>)}
      </div>
    </div>
  );
}

// ── MESSAGES ──
function Messages() {
  const [txt,setTxt] = useState("");
  return (
    <div style={S.cnt}>
      <h1 style={S.pgT}>Messages</h1>
      <div style={S.msgC}>
        <div style={S.msgHdr}><div><div style={S.msgClId}>CLM-2026-04187 — Auto Collision</div><div style={S.msgAdj}>Adjuster: Sarah Mitchell</div></div><span style={{...S.pill,background:"#E8A31718",color:"#E8A317"}}>Under Review</span></div>
        <div style={S.msgList}>{msgs.map(m => (
          <div key={m.id} style={{...S.msgBW,justifyContent:m.from==="You"?"flex-end":"flex-start"}}>
            <div className="msg-bubble" style={{...S.msgB,...(m.from==="You"?S.msgBU:S.msgBA)}}>
              {m.from!=="You"&&<div style={S.msgSnd}>{m.from} · {m.role}</div>}
              <div style={S.msgTxt}>{m.text}</div>
              <div style={S.msgTm}>{m.time}</div>
            </div>
          </div>
        ))}</div>
        <div className="message-input" style={S.msgIR}><input type="text" placeholder="Type your message..." style={S.msgIn} value={txt} onChange={e => setTxt(e.target.value)}/><button style={S.priBtn} disabled={!txt.trim()}>Send</button></div>
      </div>
    </div>
  );
}

// ── NOTIFICATIONS ──
function NotifDrop({onClose}) {
  const notifs = [{t:"Adjuster Sarah Mitchell sent a message",tm:"2 hours ago",tp:"msg"},{t:"Claim CLM-2026-03952 approved",tm:"1 day ago",tp:"ok"},{t:"Document request: additional photos needed",tm:"2 days ago",tp:"doc"}];
  return (
    <div className="notif-dd" style={S.nfDD}>
      <div style={S.nfH}><span style={{fontWeight:600}}>Notifications</span><button style={S.icnSm} onClick={onClose}><I.X/></button></div>
      {notifs.map((n,i) => (
        <div key={i} style={S.nfI}>
          <div style={{...S.nfIc,background:n.tp==="msg"?"#388BFF22":n.tp==="ok"?"#22A06B22":"#E8A31722",color:n.tp==="msg"?"#388BFF":n.tp==="ok"?"#22A06B":"#E8A317"}}>{n.tp==="msg"?<I.Msg/>:n.tp==="ok"?<I.Check/>:<I.FileText/>}</div>
          <div style={{flex:1}}><div style={S.nfTx}>{n.t}</div><div style={S.nfTm}>{n.tm}</div></div>
        </div>
      ))}
    </div>
  );
}

// ── EMERGENCY MODAL ──
function EmergencyModal({onClose}) {
  return (
    <div style={S.modOv} onClick={onClose}>
      <div style={S.mod} onClick={e => e.stopPropagation()}>
        <div style={S.modH}><div style={S.emIc}><I.Alert/></div><h2 style={S.modT}>Emergency Assistance</h2><button style={S.icnBtn} onClick={onClose}><I.X/></button></div>
        <p style={S.modD}>For life-threatening emergencies, call 911 first. Use these resources for immediate help.</p>
        <div className="emergency-grid" style={S.emG}>
          {[{l:"Emergency",n:"911",d:"Life-threatening"},{l:"Claims Hotline 24/7",n:"1-800-555-CLAM",d:"Report by phone"},{l:"Roadside Assist",n:"1-800-555-ROAD",d:"Towing, lockout"},{l:"Water Mitigation",n:"1-800-555-WATR",d:"Emergency water removal"}].map((s,i) => <div key={i} style={S.emC}><div style={S.emL}>{s.l}</div><div style={S.emN}>{s.n}</div><div style={S.emD}>{s.d}</div></div>)}
        </div>
        <div style={S.emTips}><h3 style={S.subH}>Immediate steps:</h3>{["Ensure everyone's safety first","Document the scene with photos","Exchange info with other parties","File a police report if applicable","Prevent further damage (shut off water, etc.)"].map((t,i)=><div key={i} style={S.tipI}><I.Check/>{t}</div>)}</div>
      </div>
    </div>
  );
}
