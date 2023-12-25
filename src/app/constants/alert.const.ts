export const alertMessages: Record<string, string> = Object.freeze({
  A001: "บันทึกข้อมูลสำเร็จ",
  A002: "บันทึกข้อมูลไม่สำเร็จ",
  A003: "บันทึกข้อมูลไม่สำเร็จ เนื่องจากมีข้อมูลซ้ำในระบบ",
  A004: "ลบข้อมูลสำเร็จ",
  A005: "ลบข้อมูลไม่สำเร็จ",
  A006: "ลบข้อมูลไม่สำเร็จ เนื่องจาก",
  A007: "ไม่พบข้อมูลในระบบ",
  A008: "กรุณากรอกข้อมูลให้ครบถ้วน",
  A009: "ไฟล์มีขนาดเกิน 6 MB",
  A010: "กรุณากรอกข้อมูลที่ต้องการค้นหา",
  saveSuccess: "บันทึกข้อมูลสำเร็จ",
  saveNotSuccess: "บันทึกข้อมูลไม่สำเร็จ",
  saveDuplicate: "บันทึกข้อมูลไม่สำเร็จ เนื่องจากมีข้อมูลซ้ำในระบบ",
  resetDelete: "ระบบได้ทำการ Reset รายการยกเลิก ลำดับที่ $taskNo เรียบร้อยแล้ว",
  deleteSuccess: "ลบข้อมูลสำเร็จ",
  deleteTaskNoSuccess: "ระบบได้ลบข้อมูลลำดับที่ $taskNo เรียบร้อยแล้ว",
  deleteNotSuccess: "ลบข้อมูลไม่สำเร็จ",
  notFound: "ไม่พบข้อมูลในระบบ",
  fillInput: "กรุณากรอกข้อมูลให้ครบถ้วน",
  fileExceedsLimit: "ไฟล์มีขนาดเกิน 6 MB",
  fillSearch: "กรุณากรอกข้อมูลที่ต้องการค้นหา",
  saveAmloInfo: "ระบบได้ทำการบันทึกข้อมูลเรียบร้อยแล้ว",
  cancelAmloInfo: "ระบบได้ย้ายข้อมูลลำดับที่ $no ไปอยู่ในรายการ ขอยกเลิก (รธ.3) เรียบร้อยแล้ว",
  confirmUpdateAmloInfo: "ท่านต้องการแก้ไขข้อมูล ลำดับที่ $no ?",
  sendUpdateAmloInfo: "ระบบได้ทำการเปลี่ยนหมายเลขเวอร์ชั่นการแก้ไข(ครั้งที่) เป็น $revision และนำปุ่มบันทึกข้อมูลกลับมาเรียบร้อยแล้ว",
  sendConfirmUpdateAmloInfo: "ท่านแน่ใจในการแก้ไขข้อมูลหรือไม่",
  sendUpdateAmloInfoSuccess: "ระบบได้ทำการบันทึกข้อมูล และบันทึกในการคำขอ รธ.5 เรียบร้อยแล้ว กรุณาทำหนังสือแจ้งฝ่ายกำกับการปฏิบัติตามกฏเกณฑ์ทางการภายใน 5 วันทำการ",
  validateSave: "บันทึกไม่สำเร็จ กรุณากรอกข้อมูลให้ครบถ้วน",
  confirmNAV: "ท่านต้องการยืนยันไม่ปรับปรุงข้อมูล ลำดับที่ $no ?",
  confirmNAVSuccess: "ระบบได้เปลี่ยนสถานะข้อมูลลำดับที่ $no เป็นรายการยืนยันไม่ปรับปรุงเรียบร้อยแล้ว",
  changeDeptCodeSuccess: "ระบบได้ทำการย้ายข้อมูล ลำดับที่ $no จาก $deptFrom ไปยัง $deptTo เรียบร้อยแล้ว",
  approveRT: "ระบบได้ทำการบันทึกเรียบร้อยแล้ว",
  cancelRT: "ระบบได้ทำการยกเลิกเรียบร้อยแล้ว",
  sendRTFail: "ไม่พบ File แนบกรุณาทำรายการใหม่อีกครั้ง",
  sendRequestApprove: "ระบบได้ บันทึกคำขอนุมัติลบรายการ ลำดับที่ $no เรียบร้อยแล้ว",
  successVertifyApprover: "ตรวจสอบรหัสถูกต้อง",
  dateInputFalseError:"ระบุวันที่ไม่ถูกต้อง",
  uploadFileInvalid:"ไฟล์ที่ Upload ไม่ถูกต้อง ",
  mainDept: "กรุณาใส่หน่วยงานหลัก",
  subDept: "กรุณาเลือกรูปแบบที่ต้องการเพิ่ม",
  subDeptAdd: "กรุณาใส่รหัสหน่วยงาน",
  subDeptIn: "กรุณาเลือกหน่วยงาน",
  amlStatus3:"ระบบตรวจสอบพบผู้เกี่ยวข้องติด AML Status 3 หรือประเทศที่มีความเสี่ยงสูง",
  permissionInvalid:"ผู้ใช้งานไม่มีสิทธ์พิมพ์เอกสาร",
  cannotShowDetail:"ไม่สามารถทำการแสดงข้อมูลได้",
  saveInvo:"กรุณา กดบันทึก ข้อมูลผู้เกี่ยวข้องให้ครบถ้วน",
  dateIsFuture: 'ไม่สามารถเลือกวันที่ล่วงหน้าได้'
});