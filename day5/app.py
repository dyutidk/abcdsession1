from flask import Flask,render_template,request
app=Flask(__name__)
@app.route('/')
def index():
    return render_template('home.html')
@app.route('/about')    
def about():
    return render_template('about.html')
@app.route('/contactus')    
def contactus():
    return render_template('contactus.html')
@app.route('/send',methods=['GET','POST'])
def send():
    if(request.method=='POST'):
        getName=request.form['name']
        getEmail=request.form['email']
        getMob=request.form['number']
        getSub=request.form['subject']
        getMsg=request.form['message']
        return render_template('result.html',name=getName,email=getEmail,mob=getMob,sub=getSub,msg=getMsg)
if(__name__=='__main__'):
    app.run(debug=True)