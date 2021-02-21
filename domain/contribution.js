//投稿情報の構造体(コンストラクタによるセットとゲッター)
class Contribution {
  constructor(
    materialName,
    category,
    fabricStructure,
    color,
    pattern,
    unitPrice,
    supplier,
    comment,
    isDel
  ) {
    this.materialName = materialName;
    this.category = category;
    this.fabricStructure = fabricStructure;
    this.color = color;
    this.pattern = pattern;
    this.unitPrice = unitPrice;
    this.supplier = supplier;
    this.comment = comment;
    this.isDel = isDel;
  }

  getMaterialName() {
    return this.materialName;
  }

  getCategory() {
    return this.category;
  }

  getFabricStructure() {
    return this.fabricStructure;
  }

  getColor() {
    return this.color;
  }

  getPattern() {
    return this.pattern;
  }

  getUnitPrice() {
    return this.unitPrice;
  }

  getSupplier() {
    return this.supplier;
  }

  getComment() {
    return this.comment;
  }

  getIsDel() {
    return this.isDel;
  }
}

//各データのルールやバリデーション

export { Contribution };
