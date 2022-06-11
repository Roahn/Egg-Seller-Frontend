class EGGData {
  static props = 0;

  Constructor() {
     
  }
  SetData(data) {
    EGGData.props = data;
  }
  GetData() {
    return EGGData.props;
  }
}
export default EGGData;
