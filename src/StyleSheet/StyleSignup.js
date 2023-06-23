import {StyleSheet} from 'react-native';

const SignupStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImg: {
    width: '100%',
    height: '100%',
  },
  formContainer: {
    flex: 1,
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  topForm: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 15,
  },

  topFormText: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  // bottom form style

  bottomForm: {
    flex: 1.7,
    backgroundColor: 'rgba(50,50,50,0.7)',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },

  accountText: {
    fontSize: 20,
  },
  accountEmail: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  // input field

  inputBox: {
    backgroundColor: 'rgba(250,250,250,0.8)',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  text: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 0,
    marginBottom: 5,
    fontSize: 18,
    color: '#000',
  },
  policy: {
    marginVertical: 15,
  },
  policyText: {
    fontSize: 18,
  },
  terms: {
    flexDirection: 'row',
    marginTop: 5,
  },
  termsText: {
    fontSize: 16,
  },
  privacyText: {
    fontSize: 20,
    color: 'rgb(3, 171, 106)',
    marginLeft: 10,
  },
  btn: {
    marginTop: 15,
    backgroundColor: 'rgb(3, 171, 106)',
    padding: 13,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignupStyle;
