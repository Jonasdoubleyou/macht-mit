package ga.machtmit.machtmitniedersachsen

import android.annotation.SuppressLint
import android.app.ProgressDialog
import android.os.Build
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.os.Handler
import android.support.annotation.RequiresApi
import android.view.View
import android.webkit.WebResourceError
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import kotlinx.android.synthetic.main.activity_main.*

/**
 * Just a small webbrowser that shows our react app
 */
class MainActivity : AppCompatActivity() {

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContentView(R.layout.activity_main)

        // Make it fullscreen
        supportActionBar?.hide()

        // Show a loading dialogue:

        val progressDialog = ProgressDialog(this)
        progressDialog.setMessage("Lade politisch brisante Inhalte")
        progressDialog.setCancelable(false)
        progressDialog.show()


        val wv: WebView = findViewById(R.id.webview)

        wv.loadUrl("file:///android_asset/index.html")
        // This is a React app, so we need JS:
        wv.settings.javaScriptEnabled = true
        wv.settings.domStorageEnabled = true

        // mount some handlers:
        wv.webViewClient = object: WebViewClient() {
            override fun onPageFinished(view: WebView?, url: String?) {
                progressDialog.hide()
            }

            override fun onReceivedError(view: WebView?, request: WebResourceRequest?, error: WebResourceError?) {
                progressDialog.show()
                progressDialog.setMessage("Fehler beim laden")
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                    println(error?.description)
                    println(request?.url)
                }
            }

            override fun onLoadResource(view: WebView?, url: String?) {
                super.onLoadResource(view, url)
                println(url)
            }
        }
    }

}
